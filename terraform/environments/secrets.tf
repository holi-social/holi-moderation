data "google_secret_manager_secret_version_access" "jwt_secret" {
  secret  = local.environment_name == "production" ? "MODERATION_JWT_SECRET_PRODUCTION" : "MODERATION_JWT_SECRET_DEVELOPMENT"
  project = data.terraform_remote_state.holi_infra_state.outputs.shared_project_id
}

data "google_secret_manager_secret_version_access" "moderation_db_password" {
  secret  = local.environment_name == "production" ? "MODERATION_DB_PASSWORD_PRODUCTION" : "MODERATION_DB_PASSWORD_DEVELOPMENT"
  project = data.terraform_remote_state.holi_infra_state.outputs.shared_project_id
}

data "google_secret_manager_secret_version_access" "okuna_db_username" {
  secret  = local.environment_name == "production" ? "OKUNA_DB_USERNAME_PRODUCTION" : "OKUNA_DB_USERNAME_DEVELOPMENT"
  project = data.terraform_remote_state.holi_infra_state.outputs.shared_project_id
}

data "google_secret_manager_secret_version_access" "okuna_db_password" {
  secret  = local.environment_name == "production" ? "OKUNA_DB_PASSWORD_PRODUCTION" : "OKUNA_DB_PASSWORD_DEVELOPMENT"
  project = data.terraform_remote_state.holi_infra_state.outputs.shared_project_id
}

data "google_secret_manager_secret_version_access" "hasura_metadata_db_password" {
  secret  = local.environment == "production" ? "HASURA_METADATA_DB_PASSWORD_PRODUCTION" : "HASURA_METADATA_DB_PASSWORD_DEVELOPMENT"
  project = data.terraform_remote_state.holi_infra_state.outputs.shared_project_id
}
