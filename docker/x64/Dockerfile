FROM mhart/alpine-node

WORKDIR /usr/src/app

RUN apk add --no-cache yarn

COPY server/package.json ./
COPY server/yarn.lock ./
COPY server/server.js ./

RUN yarn install

ADD frontend/dist ./

EXPOSE 49260
CMD ["yarn", "start"]
