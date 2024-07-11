locals {
  # moderation.apis.holi.social
  production_backend_zone   = data.terraform_remote_state.holi_infra_state.outputs.dns_apis_zone_name
  production_backend_domain = "moderation.${data.terraform_remote_state.holi_infra_state.outputs.dns_apis_zone_domain}."

  # ENV.moderation.apis.holi.social
  development_backend_zone   = data.terraform_remote_state.holi_infra_state.outputs.dns_apis_zone_name
  development_backend_domain = "${local.environment_name}.${local.production_backend_domain}"

  backend_domain      = local.environment == "production" ? local.production_backend_domain : local.development_backend_domain
  backend_domain_zone = local.environment == "production" ? local.production_backend_zone : local.development_backend_zone
  backend_name        = format(local.name_template, "backend")
}

resource "google_sql_user" "backend" {
  project  = data.terraform_remote_state.holi_infra_state.outputs.shared_project_id
  instance = local.db_instance

  name     = local.backend_name
  password = data.google_secret_manager_secret_version_access.moderation_db_password.secret_data
}

resource "google_sql_database" "backend" {
  project  = data.terraform_remote_state.holi_infra_state.outputs.shared_project_id
  instance = local.db_instance
  name     = local.backend_name
}

resource "google_cloud_run_service" "moderation_backend" {
  project  = data.terraform_remote_state.holi_infra_state.outputs.shared_project_id
  name     = local.backend_name
  location = local.default_location

  depends_on = [google_service_account.moderation, google_project_iam_member.moderation]

  autogenerate_revision_name = true

  template {
    spec {
      service_account_name = google_service_account.moderation.email

      containers {
        image = "${data.terraform_remote_state.holi_infra_state.outputs.artifact_registry_location}/holi-moderation-backend:${var.backend_image_tag}"
        ports {
          container_port = 3000
        }

        env {
          name  = "LISTEN_ADDR"
          value = "0.0.0.0"
        }

        env {
          name  = "NODE_ENV"
          value = "production"
        }

        env {
          name  = "OKUNA_DB_HOST"
          value = local.db_host
        }

        env {
          name = "OKUNA_DB_USER"
          value_from {
            secret_key_ref {
              key  = "latest"
              name = local.environment_name == "production" ? "OKUNA_DB_USERNAME_PRODUCTION" : "OKUNA_DB_USERNAME_DEVELOPMENT"
            }
          }
        }

        env {
          name = "OKUNA_DB_PASSWORD"
          value_from {
            secret_key_ref {
              key  = "latest"
              name = local.environment_name == "production" ? "OKUNA_DB_PASSWORD_PRODUCTION" : "OKUNA_DB_PASSWORD_DEVELOPMENT"
            }
          }
        }

        env {
          name  = "OKUNA_ADMIN_BASE_URL"
          value = local.environment == "production" ? "https://0kuna-adm1n.holi.social/production/admin" : "https://0kuna-adm1n.holi.social/staging/admin"
        }

        env {
          name  = "MODERATION_DB_HOST"
          value = local.db_host
        }

        env {
          name  = "MODERATION_DB_USER"
          value = google_sql_user.backend.name
        }

        env {
          name = "MODERATION_DB_PASSWORD"
          value_from {
            secret_key_ref {
              key  = "latest"
              name = local.environment_name == "production" ? "MODERATION_DB_PASSWORD_PRODUCTION" : "MODERATION_DB_PASSWORD_DEVELOPMENT"
            }
          }
        }

        env {
          name  = "MODERATION_DB_NAME"
          value = google_sql_database.backend.name
        }

        env {
          name = "MODERATION_JWT_SECRET"
          value_from {
            secret_key_ref {
              key  = "latest"
              name = local.environment_name == "production" ? "MODERATION_JWT_SECRET_PRODUCTION" : "MODERATION_JWT_SECRET_DEVELOPMENT"
            }
          }
        }

        env {
          name  = "PUBSUB_TOPIC_NAME"
          value = google_pubsub_topic.moderation.name
        }

        resources {
          # TODO: is this amount of CPU/memory really needed?
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
        "run.googleapis.com/vpc-access-egress"    = "private-ranges-only"
        "run.googleapis.com/startup-cpu-boost"    = "true"
      }
    }
  }

  metadata {
    annotations = {
      "run.googleapis.com/ingress" = "internal"
    }
  }

  traffic {
    percent         = 100
    latest_revision = true
  }
}

resource "google_cloud_run_domain_mapping" "backend_domain" {
  project  = google_cloud_run_service.moderation_backend.project
  location = google_cloud_run_service.moderation_backend.location
  name     = trim(local.environment == "production" ? local.production_backend_domain : local.development_backend_domain, ".")

  metadata {
    namespace = google_cloud_run_service.moderation_backend.project
  }

  spec {
    route_name = google_cloud_run_service.moderation_backend.name
  }
}

data "google_iam_policy" "backend" {
  binding {
    role = "roles/run.invoker"
    members = [
      "allUsers",
    ]
  }
}

resource "google_cloud_run_service_iam_policy" "backend" {
  location = google_cloud_run_service.moderation_backend.location
  project  = google_cloud_run_service.moderation_backend.project
  service  = google_cloud_run_service.moderation_backend.name

  policy_data = data.google_iam_policy.backend.policy_data
}
