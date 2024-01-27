FROM node:21.6.0-alpine3.19

RUN npm install snyk-to-html -g

COPY docker-entrypoint.sh /usr/local/bin

ENTRYPOINT ["/usr/local/bin/docker-entrypoint.sh"]
