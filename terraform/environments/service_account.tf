resource "google_service_account" "moderation" {
  project      = data.terraform_remote_state.holi_infra_state.outputs.shared_project_id
  account_id   = local.name_generic_max30
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
