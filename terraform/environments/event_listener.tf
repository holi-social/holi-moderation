locals {
  eventlistener_name = format(local.name_template, "event-listener")
}

data "archive_file" "event_listener_build" {
  type        = "zip"
  source_dir  = "${path.module}/../../apps/eventListener"
  output_path = "function.zip"

  # this isn't necessary for the normal pipeline, but functions as a guardrail when applying locally
  excludes = concat(
    tolist(fileset("${path.module}/../../apps/eventListener/dist", "**")),
    tolist(fileset("${path.module}/../../apps/eventListener/node_modules", "**")),
  )
}

resource "google_storage_bucket_object" "event_listener" {
  name   = "${local.eventlistener_name}/index.zip"
  bucket = data.terraform_remote_state.holi_infra_state.outputs.gcf_sources_upload_bucket_name
  source = data.archive_file.event_listener_build.output_path
}

resource "google_cloudfunctions2_function" "event_listener" {
  name     = local.eventlistener_name
  location = local.default_region

  depends_on = [google_service_account.moderation, google_project_iam_member.moderation]

  build_config {
    runtime     = "nodejs20"
    entry_point = "ModerationEventListener"

    source {
      storage_source {
        bucket = data.terraform_remote_state.holi_infra_state.outputs.gcf_sources_upload_bucket_name
        object = google_storage_bucket_object.event_listener.name
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

    min_instance_count = 1
    max_instance_count = 1
  }

  event_trigger {
    event_type            = "google.cloud.pubsub.topic.v1.messagePublished"
    pubsub_topic          = google_pubsub_topic.moderation.id
    service_account_email = google_service_account.moderation.email
    retry_policy          = "RETRY_POLICY_DO_NOT_RETRY"
  }
}
