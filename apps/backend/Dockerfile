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
COPY tsconfig.* package.json yarn.lock nest-cli.json webpack.config.js ./
COPY src ./src

RUN echo 'nodeLinker: node-modules' > .yarnrc.yml

RUN corepack enable \
    && yarn run -B nest build -b webpack

###

FROM node:21-alpine AS production

ARG LISTEN_ADDR="0.0.0.0"
ARG PORT=3000

WORKDIR /code
COPY --from=builder /code/dist .
COPY --from=dependencies /code/node_modules ./node_modules

COPY package.json yarn.lock drizzle.config.ts ./
COPY ./drizzle ./drizzle

EXPOSE ${PORT}
CMD [ "node", "/code/main.js" ]

###

FROM node:21-alpine as development

WORKDIR /code
COPY . /code
COPY --from=dependencies /code/node_modules ./node_modules

RUN corepack enable \
    && echo 'nodeLinker: node-modules' > .yarnrc.yml

CMD yarn install && yarn run migrations:run && yarn run -B nest start --watch