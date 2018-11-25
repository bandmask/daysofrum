FROM amd64/mongo

COPY init_ratings.json /init_ratings.json
COPY init_years.json /init_years.json

CMD mongoimport \
  --host mongodb \
  --db daysofrum \
  --collection ratings \
  --type json \
  --file /init_ratings.json \
  --jsonArray \
  && \
  mongoimport \
  --host mongodb \
  --db daysofrum \
  --collection years \
  --type json \
  --file /init_years.json \
