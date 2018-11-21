FROM arm32v6/nginx:stable-alpine-perl

RUN rm /etc/nginx/conf.d/default.conf

COPY conf /etc/nginx

VOLUME /etc/nginx
