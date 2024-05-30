locals {
  # moderation-data.apis.holi.social
  production_hasura_zone   = data.terraform_remote_state.holi_infra_state.outputs.dns_apis_zone_name
  production_hasura_domain = "moderation-data.${data.terraform_remote_state.holi_infra_state.outputs.dns_apis_zone_domain}."

  # ENV.moderation-data.apis.holi.social
  development_hasura_zone   = data.terraform_remote_state.holi_infra_state.outputs.dns_apis_zone_name
  development_hasura_domain = "${local.environment_name}.moderation-data.${data.terraform_remote_state.holi_infra_state.outputs.dns_apis_zone_domain}."

  hasura_domain      = local.environment == "production" ? local.production_hasura_domain : local.development_hasura_domain
  hasura_domain_zone = local.environment == "production" ? local.production_hasura_zone : local.development_hasura_zone

  okuna_db_name = local.environment == "production" ? "okuna-production-deb5" : "okuna-staging-4db7"
}

resource "random_id" "hasura" {
  byte_length = 2
}

resource "google_sql_user" "hasura" {
  project  = data.terraform_remote_state.holi_infra_state.outputs.shared_project_id
  instance = local.db_instance
  name     = "moderation_hasura_${local.environment_name_snake}_${random_id.hasura.hex}"
  password = data.google_secret_manager_secret_version_access.hasura_metadata_db_password.secret_data
}

resource "google_sql_database" "hasura" {
  project  = data.terraform_remote_state.holi_infra_state.outputs.shared_project_id
  instance = local.db_instance
  name     = "moderation_hasura_${local.environment_name_snake}_${random_id.hasura.hex}"
}

resource "google_cloud_run_service" "moderation_hasura" {
  project  = data.terraform_remote_state.holi_infra_state.outputs.shared_project_id
  name     = "moderation-hasura-${local.environment_name}-${random_id.hasura.hex}"
  location = local.default_location

  depends_on = [google_service_account.moderation, google_project_iam_member.moderation]

  autogenerate_revision_name = true

  template {
    spec {
      service_account_name = google_service_account.moderation.email

      containers {
        image = "docker.io/hasura/graphql-engine:${var.hasura_image_tag}"
        ports {
          container_port = 8080
        }

        env {
          name  = "HASURA_GRAPHQL_METADATA_DATABASE_URL"
          value = "postgres://${google_sql_user.hasura.name}:${google_sql_user.hasura.password}@${local.db_host}:5432/${google_sql_database.hasura.name}"
        }

        env {
          name  = "OKUNA_DATABASE_URL"
          value = "postgres://${data.google_secret_manager_secret_version_access.okuna_db_username.secret_data}:${data.google_secret_manager_secret_version_access.okuna_db_password.secret_data}@${local.db_host}:5432/${local.okuna_db_name}"
        }

        env {
          name  = "BACKEND_GRAPHQL_URL"
          value = "https://${trim(local.backend_domain, ".")}/graphql"
        }

        env {
          name = "HASURA_GRAPHQL_JWT_SECRET"
          value = jsonencode({
            "type" = "HS256"
            "key"  = data.google_secret_manager_secret_version_access.jwt_secret.secret_data
          })
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
            cpu    = local.environment == "production" ? "4000m" : "4000m"
            memory = local.environment == "production" ? "2048Mi" : "2048Mi"
          }
          requests = {
            cpu    = local.environment == "production" ? "4000m" : "4000m"
            memory = local.environment == "production" ? "2048Mi" : "2048Mi"
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
    }
  }

  metadata {
    annotations = {
      "run.googleapis.com/ingress" = "all"
    }
  }

  traffic {
    percent         = 100
    latest_revision = true
  }
}

resource "google_cloud_run_domain_mapping" "hasura_domain" {
  project  = google_cloud_run_service.moderation_hasura.project
  location = google_cloud_run_service.moderation_hasura.location
  name     = trim(local.hasura_domain, ".")

  metadata {
    namespace = google_cloud_run_service.moderation_hasura.project
  }

  spec {
    route_name = google_cloud_run_service.moderation_hasura.name
  }
}

data "google_iam_policy" "hasura" {
  binding {
    role = "roles/run.invoker"
    members = [
      "allUsers",
    ]
  }
}

resource "google_cloud_run_service_iam_policy" "hasura" {
  location = google_cloud_run_service.moderation_hasura.location
  project  = google_cloud_run_service.moderation_hasura.project
  service  = google_cloud_run_service.moderation_hasura.name

  policy_data = data.google_iam_policy.hasura.policy_data
}
