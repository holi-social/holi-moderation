locals {
  eventlistener_name = format(local.name_template, "event-listener")
}

data "archive_file" "event_listener_artifact" {
  type        = "zip"
  source_dir  = "${path.module}/../../apps/eventListener/dist"
  output_path = "index.zip"
}

resource "google_storage_bucket_object" "event_listener_bucket_artifact" {
  name   = "${local.eventlistener_name}/index-${timestamp()}.zip"
  bucket = data.terraform_remote_state.holi_infra_state.outputs.gcf_sources_upload_bucket_name
  source = data.archive_file.event_listener_artifact.output_path
}

resource "google_cloudfunctions2_function" "event_listener_function" {
  name         = local.eventlistener_name
  location     = local.default_region
  kms_key_name = data.terraform_remote_state.moderation_common_state.outputs.pubsub_kms_key_id

  depends_on = [google_service_account.moderation, google_project_iam_member.moderation]

  build_config {
    runtime           = "nodejs20"
    entry_point       = "ModerationEventListener"
    docker_repository = data.terraform_remote_state.holi_infra_state.outputs.cloudfunctions_repository_id

    source {
      storage_source {
        bucket = data.terraform_remote_state.holi_infra_state.outputs.gcf_sources_upload_bucket_name
        object = google_storage_bucket_object.event_listener_bucket_artifact.name
      }
    }
  }

  service_config {
    secret_environment_variables {
      key        = "ORY_API_KEY"
      project_id = local.project
      secret     = local.environment == "production" ? "ORY_API_KEY_PRODUCTION" : "ORY_API_KEY_DEVELOPMENT"
      version    = "latest"
    }

    environment_variables = {
      "LOG_EXECUTION_ID" = "true"
    }

    service_account_email          = google_service_account.moderation.email
    all_traffic_on_latest_revision = true
    ingress_settings               = "ALLOW_INTERNAL_ONLY"

    min_instance_count = 0
    max_instance_count = 1
  }

  event_trigger {
    event_type            = "google.cloud.pubsub.topic.v1.messagePublished"
    pubsub_topic          = google_pubsub_topic.moderation.id
    service_account_email = google_service_account.moderation.email
    retry_policy          = "RETRY_POLICY_DO_NOT_RETRY"
  }

  labels = {
    "environment_type" = local.environment_type
    "holi_service"     = "moderation-eventlistener"
  }
}
