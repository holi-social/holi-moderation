locals {
  # federator.apis.holi.social
  production_federator_zone   = data.terraform_remote_state.holi_infra_state.outputs.dns_apis_zone_name
  production_federator_domain = "federator.${data.terraform_remote_state.holi_infra_state.outputs.dns_apis_zone_domain}."

  # ENV.federator.apis.holi.social
  development_federator_zone   = data.terraform_remote_state.holi_infra_state.outputs.dns_apis_zone_name
  development_federator_domain = "${local.environment_name}.${local.production_federator_domain}"

  federator_domain      = local.environment == "production" ? local.production_federator_domain : local.development_federator_domain
  federator_domain_zone = local.environment == "production" ? local.production_federator_zone : local.development_federator_zone

  okuna_db_name  = data.terraform_remote_state.okuna_environments_state.outputs.database_name
  federator_name = format(local.name_template, "federator")
}

resource "google_sql_user" "federator_user" {
  project  = data.terraform_remote_state.holi_infra_state.outputs.shared_project_id
  instance = local.shared_db_instance
  name     = local.federator_name
  password = data.google_secret_manager_secret_version_access.hasura_metadata_db_password.secret_data
}

resource "google_sql_database" "federator_db" {
  project  = data.terraform_remote_state.holi_infra_state.outputs.shared_project_id
  instance = local.shared_db_instance
  name     = local.federator_name

  # on destroy, the user needs to be kept until the db is destroyed
  depends_on = [google_sql_user.federator_user]
}

resource "google_cloud_run_service" "moderation_federator" {
  project  = data.terraform_remote_state.holi_infra_state.outputs.shared_project_id
  name     = local.federator_name
  location = local.default_region

  depends_on = [google_service_account.moderation, google_project_iam_member.moderation]

  autogenerate_revision_name = true

  template {
    spec {
      service_account_name = google_service_account.moderation.email

      containers {
        image = "europe-north1-docker.pkg.dev/holi-shared/docker/holi-moderation-federator:${var.federator_image_tag}"
        ports {
          container_port = 8080
        }

        env {
          name  = "HASURA_GRAPHQL_METADATA_DB_USERNAME"
          value = google_sql_user.federator_user.name
        }
        env {
          name = "HASURA_GRAPHQL_METADATA_DB_PASSWORD"
          value_from {
            secret_key_ref {
              name = data.google_secret_manager_secret_version_access.hasura_metadata_db_password.secret
              key  = "latest"
            }
          }
        }
        env {
          name  = "HASURA_GRAPHQL_METADATA_DB_HOST"
          value = local.shared_db_host
        }
        env {
          name  = "HASURA_GRAPHQL_METADATA_DB_PORT"
          value = "5432"
        }
        env {
          name  = "HASURA_GRAPHQL_METADATA_DB_NAME"
          value = google_sql_database.federator_db.name
        }

        env {
          name = "OKUNA_DB_USERNAME"
          value_from {
            secret_key_ref {
              name = data.google_secret_manager_secret_version_access.okuna_db_username.secret
              key  = "latest"
            }
          }
        }
        env {
          name = "OKUNA_DB_PASSWORD"
          value_from {
            secret_key_ref {
              name = data.google_secret_manager_secret_version_access.okuna_db_password.secret
              key  = "latest"
            }
          }
        }
        env {
          name  = "OKUNA_DB_HOST"
          value = local.shared_db_host
        }
        env {
          name  = "OKUNA_DB_PORT"
          value = "5432"
        }
        env {
          name  = "OKUNA_DB_NAME"
          value = local.okuna_db_name
        }

        env {
          name  = "BACKEND_GRAPHQL_URL"
          value = "https://${trim(local.backend_domain, ".")}/graphql"
        }

        env {
          name = "MODERATION_JWT_SECRET"
          value_from {
            secret_key_ref {
              name = data.google_secret_manager_secret_version_access.jwt_secret.secret
              key  = "latest"
            }
          }
        }

        env {
          name  = "HASURA_GRAPHQL_DEV_MODE"
          value = "false"
        }

        env {
          name  = "HASURA_GRAPHQL_ENABLE_CONSOLE"
          value = "false"
        }

        env {
          name = "HASURA_GRAPHQL_ADMIN_SECRET"
          value_from {
            secret_key_ref {
              name = local.environment_name == "production" ? "MODERATION_HASURA_ADMIN_SECRET_PRODUCTION" : "MODERATION_HASURA_ADMIN_SECRET_DEVELOPMENT"
              key  = "latest"
            }
          }
        }

        env {
          name  = "HASURA_GRAPHQL_ENABLE_REMOTE_SCHEMA_PERMISSIONS"
          value = "true"
        }

        env {
          name  = "HASURA_GRAPHQL_UNAUTHORIZED_ROLE"
          value = "anonymous"
        }

        env {
          name  = "HASURA_GRAPHQL_EXPERIMENTAL_FEATURES"
          value = "naming_convention"
        }

        resources {
          limits = {
            cpu    = local.environment == "production" ? "2000m" : "2000m"
            memory = local.environment == "production" ? "4Gi" : "4Gi"
          }
          requests = {
            cpu    = local.environment == "production" ? "2000m" : "2000m"
            memory = local.environment == "production" ? "1Gi" : "1Gi"
          }
        }

        startup_probe {
          period_seconds    = 15
          timeout_seconds   = 10
          failure_threshold = 6

          http_get {
            path = "/healthz"
          }
        }

        liveness_probe {
          period_seconds    = 30
          timeout_seconds   = 5
          failure_threshold = 2

          http_get {
            path = "/healthz"
          }
        }
      }

      container_concurrency = 80
      timeout_seconds       = 300
    }

    metadata {
      annotations = {
        "autoscaling.knative.dev/minScale" = local.environment == "production" ? "1" : "0"
        "autoscaling.knative.dev/maxScale" = "1"

        "run.googleapis.com/vpc-access-connector" = data.terraform_remote_state.holi_infra_state.outputs.vpc_access_connector_name
        "run.googleapis.com/vpc-access-egress"    = "all-traffic"
        "run.googleapis.com/startup-cpu-boost"    = "true"
      }
      # labels set on the revision level
      labels = {
        "environment_type" = local.environment_type
        "holi_service"     = "moderation-federator"
      }
    }
  }

  metadata {
    annotations = {
      "run.googleapis.com/ingress" = "all"
    }
    # labels set on the service level
    labels = {
      "environment_type" = local.environment_type
      "holi_service"     = "moderation-federator"
    }
  }

  traffic {
    percent         = 100
    latest_revision = true
  }
}

resource "google_cloud_run_domain_mapping" "federator_domain_mapping" {
  project  = google_cloud_run_service.moderation_federator.project
  location = google_cloud_run_service.moderation_federator.location
  name     = trim(local.federator_domain, ".")

  metadata {
    namespace = google_cloud_run_service.moderation_federator.project
  }

  spec {
    route_name = google_cloud_run_service.moderation_federator.name
  }
}

data "google_iam_policy" "federator_policy" {
  binding {
    role = "roles/run.invoker"
    members = [
      "allUsers",
    ]
  }
}

resource "google_cloud_run_service_iam_policy" "federator_service_policy" {
  location = google_cloud_run_service.moderation_federator.location
  project  = google_cloud_run_service.moderation_federator.project
  service  = google_cloud_run_service.moderation_federator.name

  policy_data = data.google_iam_policy.federator_policy.policy_data
}
