terraform {
  backend "gcs" {
    bucket = "holi-shared-terraform-state"
    prefix = "moderation-environments"
  }
}

data "terraform_remote_state" "holi_infra_state" {
  backend = "gcs"
  config = {
    bucket = "holi-shared-terraform-state"
    prefix = "infra"
  }
}

data "terraform_remote_state" "moderation_common_state" {
  backend = "gcs"
  config = {
    bucket = "holi-shared-terraform-state"
    prefix = "moderation-common"
  }
}

provider "google" {
  region  = "europe-north1"
  project = data.terraform_remote_state.holi_infra_state.outputs.shared_project_id
}

provider "google-beta" {
  region  = "europe-north1"
  project = data.terraform_remote_state.holi_infra_state.outputs.shared_project_id
}
