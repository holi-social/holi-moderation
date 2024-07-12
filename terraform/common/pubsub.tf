resource "google_project_service_identity" "moderation_pubsub_serviceaccount" {
  provider = google-beta

  project = data.terraform_remote_state.holi_infra_state.outputs.shared_project_id
  service = "pubsub.googleapis.com"
}

resource "google_kms_crypto_key" "moderation_pubsub" {
  name            = "moderation-pubsub-key"
  key_ring        = data.terraform_remote_state.holi_infra_state.outputs.kms_shared_key_ring_id
  rotation_period = "100000s"

  lifecycle {
    prevent_destroy = true
  }
}

resource "google_kms_crypto_key_iam_binding" "moderation_pubsub" {
  crypto_key_id = google_kms_crypto_key.moderation_pubsub.id
  role          = "roles/cloudkms.cryptoKeyEncrypterDecrypter"
  members = [
    "serviceAccount:${google_project_service_identity.moderation_pubsub_serviceaccount.email}",
  ]
}

output "pubsub_kms_key_id" {
  value = google_kms_crypto_key.moderation_pubsub.id
}
