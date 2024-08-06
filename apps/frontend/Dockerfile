FROM europe-north1-docker.pkg.dev/holi-shared/docker-hub-remote/nginx:mainline

COPY /dist /srv/public
COPY ./deploy/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

STOPSIGNAL SIGTERM

CMD ["nginx", "-g", "daemon off;"]