FROM node:21-alpine AS dependencies

WORKDIR /code
COPY package.json .
COPY yarn.lock .
RUN echo 'nodeLinker: node-modules' > .yarnrc.yml

RUN corepack enable \
    && yarn install --immutable

###

FROM node:21-alpine AS builder

WORKDIR /code
COPY --from=dependencies /code/node_modules /code/node_modules
COPY tsconfig.* package.json yarn.lock nest-cli.json ./
COPY src ./src
COPY migrations ./migrations

RUN echo 'nodeLinker: node-modules' > .yarnrc.yml

RUN corepack enable \
    && yarn run -B nest build

###

FROM node:21-alpine AS production

ARG LISTEN_ADDR="0.0.0.0"
ARG PORT=3000

WORKDIR /code
COPY --from=builder /code/dist .
COPY --from=dependencies /code/node_modules ./node_modules

COPY package.json yarn.lock ./

EXPOSE ${PORT}
CMD [ "node", "/code/src/main.js" ]

###

FROM node:21-alpine as development

WORKDIR /code
COPY . /code
COPY --from=dependencies /code/node_modules ./node_modules

RUN corepack enable \
    && echo 'nodeLinker: node-modules' > .yarnrc.yml

CMD yarn install && yarn run typeorm migration:run -d src/typeorm.ts && yarn run -B nest start --watch