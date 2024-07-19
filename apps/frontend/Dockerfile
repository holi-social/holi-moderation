FROM europe-north1-docker.pkg.dev/holi-shared/docker-hub-remote/node:20.11-alpine AS dependencies

WORKDIR /code
COPY package.json yarn.lock .yarnrc.yml ./

RUN corepack enable \
    && yarn install --immutable

###

FROM europe-north1-docker.pkg.dev/holi-shared/docker-hub-remote/node:20.11-alpine AS builder

WORKDIR /code
COPY --from=dependencies /code/node_modules ./node_modules
COPY . /code/

ARG VITE_OKUNA_ADMIN_BASE_URL
ARG VITE_GRAPHQL_URL

RUN corepack enable \
    && yarn run build

###

FROM europe-north1-docker.pkg.dev/holi-shared/docker-hub-remote/node:20.11-alpine AS development

WORKDIR /code

COPY --from=dependencies /code/node_modules ./node_modules
COPY . /code/

RUN corepack enable

EXPOSE 5173
CMD yarn install && yarn run dev

###

FROM europe-north1-docker.pkg.dev/holi-shared/docker-hub-remote/nginx:mainline AS production

COPY --from=builder /code/dist /srv/public
COPY ./deploy/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80

STOPSIGNAL SIGTERM

CMD ["nginx", "-g", "daemon off;"]