FROM arm32v6/alpine

RUN \
  echo 'http://dl-3.alpinelinux.org/alpine/edge/testing' >> /etc/apk/repositories && \
  apk upgrade --update && \
  apk --no-cache --update add mongodb && \
  rm /usr/bin/mongoperf

VOLUME /data/db
EXPOSE 27017

COPY run.sh /root
ENTRYPOINT [ "/root/run.sh" ]
CMD [ "mongod" ]
