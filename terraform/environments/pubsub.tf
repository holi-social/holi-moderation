resource "google_pubsub_topic" "moderation" {
  project      = data.terraform_remote_state.holi_infra_state.outputs.shared_project_id
  name         = local.name_generic
  kms_key_name = data.terraform_remote_state.moderation_common_state.outputs.pubsub_kms_key_id

  message_storage_policy {
    allowed_persistence_regions = [local.default_region]
  }
}
