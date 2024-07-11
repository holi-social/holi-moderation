resource "random_id" "service_account" {
  byte_length = 2
  prefix      = "moderation-${substr(local.environment_name, 0, 14)}-" # sa-id limit 30 characters. 14 chars for environment, 16 for rest of prefix and random_id (4 characters)
}

resource "google_service_account" "moderation" {
  project      = data.terraform_remote_state.holi_infra_state.outputs.shared_project_id
  account_id   = random_id.service_account.hex
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
