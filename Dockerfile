FROM node:23.11.1-alpine3.21

RUN npm install snyk-to-html -g

COPY docker-entrypoint.sh /usr/local/bin

ENTRYPOINT ["/usr/local/bin/docker-entrypoint.sh"]
