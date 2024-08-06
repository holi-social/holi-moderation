FROM europe-north1-docker.pkg.dev/holi-shared/docker-hub-remote/node:20.11-alpine

ARG LISTEN_ADDR="0.0.0.0"
ARG PORT=3000

WORKDIR /home/node/app

# make corepack and newstyle yarn use node_modules
COPY /.yarnrc.yml .

# install runtime dependencies (they may be platform specific)
# note: as we don't have a lockfile, there might be a rare chance of an incompatibility with the app and these deps
COPY /package.json .
RUN corepack yarn workspaces focus --production

# run the pre-built nestjs app
COPY /dist .

EXPOSE ${PORT}

CMD [ "node", "/home/node/app/src/main.js"]



