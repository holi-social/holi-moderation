resource "random_id" "service_account" {
  byte_length = 2
}

resource "google_service_account" "moderation" {
  project      = data.terraform_remote_state.holi_infra_state.outputs.shared_project_id
  account_id   = "${trim(substr("moderation-${local.environment_name}", 0, 24), ".-")}-${random_id.service_account.hex}"
  display_name = "holi-moderation: service account (${local.environment})"
}

resource "google_project_iam_member" "moderation" {
  for_each = toset([
    "roles/secretmanager.secretAccessor",
    "roles/pubsub.publisher",
    "roles/run.invoker",
  ])

  project = data.terraform_remote_state.holi_infra_state.outputs.shared_project_id
  member  = "serviceAccount:${google_service_account.moderation.email}"
  role    = each.key
}
