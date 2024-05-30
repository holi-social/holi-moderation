output "backend_domain" {
  value       = trimsuffix(google_dns_record_set.backend.name, ".")
  description = "Moderation API domain"
}

output "frontend_domain" {
  value       = trimsuffix(google_dns_record_set.frontend.name, ".")
  description = "Moderation frontend domain"
}

output "hasura_domain" {
  value       = trimsuffix(google_dns_record_set.hasura.name, ".")
  description = "Moderation Hasura domain"
}

output "moderation_service_account_email" {
  value = google_service_account.moderation.email
}

output "migration_job_name" {
  value = google_cloud_run_v2_job.migrations.name
}

output "project_id" {
  value = data.terraform_remote_state.holi_infra_state.outputs.shared_project_id
}

output "hasura_version" {
  value = var.hasura_image_tag
}
