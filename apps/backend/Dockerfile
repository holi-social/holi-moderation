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
COPY package.json ./package.json
COPY yarn.lock ./yarn.lock
COPY tsconfig.* .
COPY src ./src

RUN echo 'nodeLinker: node-modules' > .yarnrc.yml

RUN corepack enable \
    && yarn run -B nest build -b webpack

###

FROM node:21-alpine AS production

ARG LISTEN_ADDR="0.0.0.0"
ARG PORT=3000

WORKDIR /code
COPY --from=builder /code/dist/main.js .
COPY --from=dependencies /code/node_modules .
COPY package.json .
COPY yarn.lock .

EXPOSE ${PORT}
CMD [ "node", "/code/main.js" ]

###

FROM node:21-alpine as development

ARG LISTEN_ADDR="0.0.0.0"
ARG PORT=3000

WORKDIR /code
COPY . /code
COPY --from=dependencies /code/node_modules .

RUN corepack enable \
    && echo 'nodeLinker: node-modules' > .yarnrc.yml

EXPOSE ${PORT}
CMD yarn run -B nest start --watch