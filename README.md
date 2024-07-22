# holi-moderation

## How to run

Run either as part of the holi-meta-based mprocs setup (enable in .envrc.local.backends)
or
using docker-compose from the context of this repository

1. copy `.env.local.template` to `.env.local` and set okuna db credentials
2. ensure direnv reloads the file 
3. `gcloud auth configure-docker europe-north1-docker.pkg.dev`
4. `docker compose up -d`
5. `docker compose exec backend yarn run typeorm migration:run -d src/typeorm.ts`
6. install hasura-cli https://hasura.io/docs/latest/hasura-cli/install-hasura-cli
7. `cd apps/hasura && hasura deploy --admin-secret HASURA_GRAPHQL_ADMIN_SECRET`

An initial user account is created for you and a password shown in the backend container log and saved to the [backend/.credentials file](backend/.credentials).
(`+++ INITIAL USER: moderation@holi.social ...`)

You should be able to reach the following endpoints:

- [Hasura Console](http://localhost:8080/console)
- [Frontend](http://localhost:5173)
- [Backend GQL Playground](http://localhost:8087/graphql)


## Useful commands

- Generate GraphQL types for frontend:
  ```bash
  docker compose exec frontend yarn run gqlgen
  ```

- Export hasura metadata after changes via the Web console:
  ```bash
  cd apps/hasura
  hasura metadata export
  ```

- Generate new moderation service migrations
  ```bash
  docker compose exec backend yarn run typeorm migration:generate -d src/typeorm.ts migrations/<MigrationName>
  ```

- Run  moderation service migrations
  ```bash
  docker compose exec backend yarn run typeorm migration:run -d src/typeorm.ts
  ```

- Reload hasura metadata (in case of connection errors, new graphql schema, ...)
  ```bash
  cd apps/hasura
  hasura md reload
  ```