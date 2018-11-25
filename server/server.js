const express = require('express');
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const port = 49260;
const dbUri = "mongodb://mongodb";
const app = express();

MongoClient.connect(dbUri, (err, client) => {
  if (err) throw 'Error connecting to db ' + err;

  var db = client.db('daysofrum')
  console.log('connected to db' + db);

  app.use(express.static(__dirname));

  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  app.listen(port, () => {
    console.log('listeneing on port ' + port);
  });

  app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
  });

  app.get('/api/years', (req, res) => {
    console.log('request for /api/year');

    db.collection('years').find().toArray((err, result) => {
      if (err) return console.log('error fetching years');

      res.json(result);
    });
  });

  app.get('/api/ratings', (req, res) => {
    let year = parseInt(req.query.year);

    console.log('request for /api/ratings with ' + year);

    db.collection('ratings').find({ year: year }).toArray((err, result) => {
      if (err) return console.log('error fetching ratings for ' + year);

      console.log('found raings for year', year, result);

      res.json(result);
    })
  });
});
