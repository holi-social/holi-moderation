FROM node:21-alpine AS dependencies

WORKDIR /code
COPY package.json ./
COPY yarn.lock ./
COPY .yarnrc.yml ./

RUN corepack enable \
    && yarn install --immutable \
    && npm install @rollup/rollup-linux-arm64-musl

###

FROM node:21-alpine AS builder

WORKDIR /code
COPY --from=dependencies /code/node_modules ./node_modules
COPY . /code/

RUN corepack enable \
    && yarn run build

###

FROM node:21-alpine AS development

WORKDIR /code

COPY --from=dependencies /code/node_modules ./node_modules
COPY . /code/

RUN corepack enable && yarn install --immutable

EXPOSE 5173
CMD yarn run dev