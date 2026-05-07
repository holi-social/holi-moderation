terraform {
  # allow the lowest common version across all projects, so that the current CI docker image version suits all projects
  required_version = ">= 1.9"
  required_providers {
    google = {
      source  = "hashicorp/google"
      version = "7.31.0"
    }
    google-beta = {
      source  = "hashicorp/google-beta"
      version = "7.31.0"
    }
  }
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

data "terraform_remote_state" "rewards" {
  backend   = "gcs"
  workspace = terraform.workspace == "production" ? "production" : "staging"
  config = {
    bucket = "holi-shared-terraform-state"
    prefix = "rewards-environments"
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
