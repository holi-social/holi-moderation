locals {
  migrations_name = format(local.name_template, "migration")
}

# TODO: How does this work? How are migrations synced with deployments?
resource "google_cloud_run_v2_job" "backend_db_migrations" {
  depends_on = [google_project_iam_member.moderation]

  project  = data.terraform_remote_state.holi_infra_state.outputs.shared_project_id
  name     = local.migrations_name
  location = local.default_region

  template {
    task_count = 1

    template {
      max_retries     = 1
      service_account = google_service_account.moderation.email

      containers {
        image   = "${data.terraform_remote_state.holi_infra_state.outputs.artifact_registry_location}/holi-moderation-backend:${var.backend_image_tag}"
        command = ["node", "/code/node_modules/.bin/typeorm-ts-node-commonjs", "migration:run", "-d", "/code/src/typeorm.js"]


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
          value_source {
            secret_key_ref {
              version = "latest"
              secret  = local.environment_name == "production" ? "MODERATION_DB_PASSWORD_PRODUCTION" : "MODERATION_DB_PASSWORD_DEVELOPMENT"
            }
          }
        }

        env {
          name  = "MODERATION_DB_NAME"
          value = google_sql_database.backend.name
        }

        env {
          name  = "PUBSUB_TOPIC_NAME"
          value = google_pubsub_topic.moderation.name
        }
      }

      vpc_access {
        connector = data.terraform_remote_state.holi_infra_state.outputs.vpc_access_connector_id
        egress    = "PRIVATE_RANGES_ONLY"
      }
    }
  }
}

