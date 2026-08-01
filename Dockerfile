FROM node:24.18.1-alpine3.23

RUN npm install snyk-to-html -g

COPY docker-entrypoint.sh /usr/local/bin

ENTRYPOINT ["/usr/local/bin/docker-entrypoint.sh"]
