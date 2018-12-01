import mongodb from 'mongodb'
import config from 'config/config'

const MongoClient = mongodb.MongoClient

let _db

const connect = (callback) => {
  if (_db) {
    callback()
    return
  }

  MongoClient.connect(config.db.mongoDbConnection, { useNewUrlParser: true }, async (error, client) => {
    if (error) {
      callback(error)
      return
    }

    _db = client.db(config.db.mongoDbName)
    callback()
  })
}

const getDb = () => _db

export default {
  connect: connect,
  getDb: getDb
}
