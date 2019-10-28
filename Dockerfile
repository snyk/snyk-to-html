FROM node:alpine

RUN npm install snyk-to-html -g

COPY docker-entrypoint.sh /usr/local/bin

ENTRYPOINT ["/usr/local/bin/docker-entrypoint.sh"]
