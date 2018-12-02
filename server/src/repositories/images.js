import dbUtil from 'utils/db'

const collection = 'images'

const getAll = () => {
  let db = dbUtil.getDb()
  return db.collection(collection).find().toArray()
}

const get = id => {
  let db = dbUtil.getDb()
  return db.collection(collection).findOne({ _id: id })
}

const insertOrUpdate = (id, image) => {
  let db = dbUtil.getDb()
  return db.collection(collection).findOneAndUpdate({ _id: id }, { $set: { image: image } }, { upsert: true })
}

export default {
  getAll: getAll,
  get: get,
  insertOrUpdate, insertOrUpdate
}
