resource "google_dns_record_set" "backend" {
  project = data.terraform_remote_state.holi_infra_state.outputs.shared_project_id

  name         = local.backend_domain
  managed_zone = local.environment_backend_zone

  type = google_cloud_run_domain_mapping.backend_domain.status[0].resource_records[0].type
  ttl  = 300

  rrdatas = [
    google_cloud_run_domain_mapping.backend_domain.status[0].resource_records[0].rrdata
  ]
}

resource "google_dns_record_set" "hasura" {
  project = data.terraform_remote_state.holi_infra_state.outputs.shared_project_id

  name         = local.federator_domain
  managed_zone = local.federator_domain_zone

  type = google_cloud_run_domain_mapping.backend_domain.status[0].resource_records[0].type
  ttl  = 300

  rrdatas = [
    google_cloud_run_domain_mapping.backend_domain.status[0].resource_records[0].rrdata
  ]
}

resource "google_dns_record_set" "frontend" {
  project = data.terraform_remote_state.holi_infra_state.outputs.shared_project_id

  name         = local.frontend_domain
  managed_zone = local.frontend_domain_zone

  type = google_cloud_run_domain_mapping.frontend.status[0].resource_records[0].type
  ttl  = 300

  rrdatas = [
    google_cloud_run_domain_mapping.frontend.status[0].resource_records[0].rrdata
  ]
}
