locals {
  # moderation.holi.social
  production_frontend_zone   = data.terraform_remote_state.holi_infra_state.outputs.dns_sld_zone_name
  production_frontend_domain = "moderation.${data.terraform_remote_state.holi_infra_state.outputs.dns_sld_zone_domain}."

  # ENV.moderation.holi.social
  development_frontend_zone   = data.terraform_remote_state.holi_infra_state.outputs.dns_sld_zone_name
  development_frontend_domain = "${local.environment_name}.${local.production_frontend_domain}"

  frontend_domain      = local.environment == "production" ? local.production_frontend_domain : local.development_frontend_domain
  frontend_domain_zone = local.environment == "production" ? local.production_frontend_zone : local.development_frontend_zone
  frontend_name        = format(local.name_template, "frontend")
}


resource "google_cloud_run_service" "frontend" {
  project  = data.terraform_remote_state.holi_infra_state.outputs.shared_project_id
  name     = local.frontend_name
  location = local.default_region

  depends_on = [google_service_account.moderation, google_project_iam_member.moderation]

  autogenerate_revision_name = true

  template {
    spec {
      service_account_name = google_service_account.moderation.email

      containers {
        image = "${data.terraform_remote_state.holi_infra_state.outputs.artifact_registry_location}/holi-moderation-frontend:${var.frontend_image_tag}"

        ports {
          container_port = 80
        }
      }

      container_concurrency = 80
      timeout_seconds       = 300
    }

    metadata {
      annotations = {
        "autoscaling.knative.dev/minScale" = local.environment == "production" ? "1" : "0"
        "autoscaling.knative.dev/maxScale" = "1"

        "run.googleapis.com/vpc-access-connector" = data.terraform_remote_state.holi_infra_state.outputs.vpc_access_connector_name
        "run.googleapis.com/vpc-access-egress"    = "all-traffic"
        "run.googleapis.com/startup-cpu-boost"    = "true"
      }
      # labels set on the revision level
      labels = {
        "environment_type" = local.environment_type
        "holi_service"     = "moderation-frontend"
      }
    }
  }

  metadata {
    annotations = {
      "run.googleapis.com/ingress" = "all"
    }
    # labels set on the service level
    labels = {
      "environment_type" = local.environment_type
      "holi_service"     = "moderation-frontend"
    }
  }

  traffic {
    percent         = 100
    latest_revision = true
  }
}

resource "google_cloud_run_domain_mapping" "frontend" {
  project  = google_cloud_run_service.frontend.project
  location = google_cloud_run_service.frontend.location
  name     = trim(local.frontend_domain, ".")

  metadata {
    namespace = google_cloud_run_service.frontend.project
  }

  spec {
    route_name = google_cloud_run_service.frontend.name
  }
}

data "google_iam_policy" "frontend" {
  binding {
    role = "roles/run.invoker"
    members = [
      "allUsers",
    ]
  }
}

resource "google_cloud_run_service_iam_policy" "frontend" {
  location = google_cloud_run_service.frontend.location
  project  = google_cloud_run_service.frontend.project
  service  = google_cloud_run_service.frontend.name

  policy_data = data.google_iam_policy.frontend.policy_data
}
