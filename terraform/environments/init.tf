terraform {
  backend "gcs" {
    bucket = "holi-shared-terraform-state"
    prefix = "moderation-environments"
  }
}

data "terraform_remote_state" "moderation_common_state" {
  backend = "gcs"
  config = {
    bucket = "holi-shared-terraform-state"
    prefix = "moderation-common"
  }
}

data "terraform_remote_state" "holi_infra_state" {
  backend = "gcs"
  config = {
    bucket = "holi-shared-terraform-state"
    prefix = "infra"
  }
}

data "terraform_remote_state" "okuna_environments_state" {
  backend   = "gcs"
  workspace = terraform.workspace == "production" ? "production" : "staging"
  config = {
    bucket = "holi-shared-terraform-state"
    prefix = "okuna-environments"
  }
}

provider "google" {
  region  = local.default_region
  project = data.terraform_remote_state.holi_infra_state.outputs.shared_project_id
}

provider "google-beta" {
  region  = local.default_region
  project = data.terraform_remote_state.holi_infra_state.outputs.shared_project_id
}
