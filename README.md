# holi-moderation

## How to run

1. copy `.env.dist` to `.env` and set the correct password for the okuna database inside
2. either source `.env` manually, or ensure direnv loads the file 
3. `docker compose up -d`
4. `docker compose exec backend yarn run typeorm migration:run -d src/typeorm.ts`
5. `cd apps/hasura && hasura deploy` 

You should be able to reach the following endpoints:

- [Hasura Console](http://localhost:8080/console)
- [Frontend](http://localhost:8089)
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

- Generate new migrations
  ```bash
  docker compose exec backend yarn run typeorm migration:generate -d src/typeorm.ts migrations/<MigrationName>
  ```

- Run migrations
  ```bash
  docker compose exec backend yarn run typeorm migration:run -d src/typeorm.ts
  ```