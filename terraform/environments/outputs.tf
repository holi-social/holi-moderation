output "backend_domain" {
  value       = trimsuffix(google_dns_record_set.backend.name, ".")
  description = "Moderation API domain"
}

output "frontend_domain" {
  value       = trimsuffix(google_dns_record_set.frontend.name, ".")
  description = "Moderation frontend domain"
}

output "federator_domain" {
  value       = trimsuffix(google_dns_record_set.hasura.name, ".")
  description = "Moderation federator domain"
}

output "moderation_service_account_email" {
  value = google_service_account.moderation.email
}
