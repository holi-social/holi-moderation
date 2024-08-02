resource "google_project_service_identity" "moderation_pubsub_serviceaccount" {
  provider = google-beta

  project = data.terraform_remote_state.holi_infra_state.outputs.shared_project_id
  service = "pubsub.googleapis.com"
}

# TODO can be deleted once unused (no more messages in queue encrypted with this key)
resource "google_kms_crypto_key" "moderation_pubsub" {
  name     = "moderation-pubsub-key"
  key_ring = data.terraform_remote_state.holi_infra_state.outputs.kms_shared_key_ring_id

  lifecycle {
    prevent_destroy = false
  }
}

# TODO can be deleted once unused (no more messages in queue encrypted with this key)
resource "google_kms_crypto_key_iam_member" "moderation_pubsub_old" {
  crypto_key_id = google_kms_crypto_key.moderation_pubsub.id
  role          = "roles/cloudkms.cryptoKeyEncrypterDecrypter"
  member        = "serviceAccount:${google_project_service_identity.moderation_pubsub_serviceaccount.email}"
}

resource "google_kms_crypto_key_iam_member" "moderation_pubsub" {
  crypto_key_id = data.terraform_remote_state.holi_infra_state.outputs.artifact_registry_cloudfunctions_key_id
  role          = "roles/cloudkms.cryptoKeyEncrypterDecrypter"
  member        = "serviceAccount:${google_project_service_identity.moderation_pubsub_serviceaccount.email}"
}

output "pubsub_kms_key_id" {
  value = data.terraform_remote_state.holi_infra_state.outputs.artifact_registry_cloudfunctions_key_id
}
