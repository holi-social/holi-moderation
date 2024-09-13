# holi-moderation

A monorepo containing the whole moderation stack.
Dockerfiles are only used for deployment. The docker-compose file is the core of its local setup. You can run it via holi-meta mprocs or directly.
You need Okuna db running to start it.

The yarn monorepo shall orchestrate all the shared tasks on all the packages locally and in the pipeline. (lint, test, build)

## How to run

1. Prepare your `.env` file with your local okuna db connection details and some secrets 

Start either with mprocs (enable in holi-meta/.envrc.local.backends)
**or**
using docker-compose (with separate okuna db):

1. `direnv reload`
2. `gcloud auth configure-docker europe-north1-docker.pkg.dev`
3. `docker compose up -d`

Optional tools:
- install hasura-cli https://hasura.io/docs/latest/hasura-cli/install-hasura-cli

An initial user account is created for you and a password shown in the backend container log and saved to the [backend/.credentials file](backend/.credentials).
(`+++ INITIAL USER: moderation@holi.social ...`)

You should be able to reach the following endpoints:

- [Federator Hasura Console](http://localhost:8080/console)
- [Frontend](http://localhost:5173)
- [Backend Health Check](http://localhost:3001/health)
- [Backend GQL Playground](http://localhost:3001/graphql/)


## How to work on

Do your changes in the code and in the hasura configuration or its console. 

When done, 
- generate graphql types for the frontend 
- export the hasura console metadata changes
- generate the migrations for the moderation entities
- add those files to git

To apply changes to hasura metadata or run db migrations, simply restart the services or use the dedicated commands.

## Useful commands

- Generate GraphQL types for frontend:
  ```bash
  yarn gqlgen
  ```

- Export hasura metadata after changes via the Web console:
  ```bash
  cd apps/federator
  hasura hasura-metadata export
  ```

- Generate new moderation service migrations
  ```bash
  cd apps/backend
  yarn makemigrations migrations/<MigrationName>
  ```

- Run moderation service migrations
  ```bash
  cd apps/backend
  yarn migrate
  ```

- Reload hasura metadata (in case of connection errors, new graphql schema, ...)
  ```bash
  cd apps/federator
  hasura md reload
  ```

## Troubleshooting

Be aware of platform specific node-modules. E.g. @node-rs/argon2 binary fetching depends on what arch installs the node_modules.
If a container installed it, it's for Linux and the backend might not start on a Mac. Try yarn install again.


## Useful tricks

Debug a remote Federator in the Hasura Console. You can connect to it from your local apps/federator terminal and debug in the UI.
hasura console --endpoint https://someThingLikeThisRunningInCloudRun.a.run.app --admin-secret fromPassbolt

