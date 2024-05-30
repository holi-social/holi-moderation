terraform {
  backend "gcs" {
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

provider "google" {
  region = "europe-north1"
}

provider "google-beta" {
  region = "europe-north1"
}
