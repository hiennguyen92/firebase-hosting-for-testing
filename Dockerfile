FROM node:lts-alpine

RUN apk update; \
  apk add git;

RUN mkdir peerjs-server

ADD . /peerjs-server

WORKDIR /peerjs-server

RUN npm ci --omit=dev --ignore-scripts

EXPOSE 9000

CMD [ "npm", "start" ]