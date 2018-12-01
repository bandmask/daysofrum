FROM mhart/alpine-node:11.2.0 AS base

WORKDIR /app

RUN apk add --no-cache yarn

# front end build
FROM base AS front-build

COPY frontend/ ./

RUN ["yarn", "install"]
RUN ["yarn", "run", "build"]

# server build
FROM base AS server-build

COPY server/ ./

RUN ["yarn", "install"]
RUN ["yarn", "run", "build"]

COPY --from=front-build /app/dist ./dist

EXPOSE 49260
ENTRYPOINT ["yarn", "run", "start"]
