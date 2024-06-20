locals {
  # predefined environment names are staging, production, and <branchname>
  environment            = terraform.workspace
  environment_name       = trim(substr(local.environment, 0, 22), ".-") # limits the length of the name that it fits constraints google imposes for some resources, e.g. project ids
  environment_name_snake = replace(local.environment_name, "-", "_")

  default_location = "europe-north1"
  project          = data.terraform_remote_state.holi_infra_state.outputs.shared_project_id

  db_instance = local.environment == "production" ? data.terraform_remote_state.holi_infra_state.outputs.database_name_production : data.terraform_remote_state.holi_infra_state.outputs.database_name_development
  db_host     = local.environment == "production" ? data.terraform_remote_state.holi_infra_state.outputs.database_ip_address_production : data.terraform_remote_state.holi_infra_state.outputs.database_ip_address_development
}

variable "backend_image_tag" {
  type     = string
  nullable = false
}

variable "frontend_image_tag" {
  type     = string
  nullable = false
}

variable "hasura_image_tag" {
  type     = string
  nullable = false
  default  = "v2.38.0"
}
