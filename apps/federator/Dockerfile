FROM europe-north1-docker.pkg.dev/holi-shared/docker-hub-remote/hasura/graphql-engine:v2.45.2.cli-migrations-v3.ubi

WORKDIR /hasura-metadata
COPY ./hasura-metadata /hasura-metadata/

COPY ./custom-entrypoint.sh /bin/
RUN chmod +x /bin/custom-entrypoint.sh

ENTRYPOINT [ "/bin/custom-entrypoint.sh" ]
CMD ["graphql-engine", "serve"]