import dbUtil from 'utils/db'

const collection = 'years'

const getAll = () => {
  let db = dbUtil.getDb()
  return db.collection(collection).find().toArray()
}

const insertOrUpdate = (yearModel) => {
  let db = dbUtil.getDb()
  return db.collection(collection).findOneAndUpdate({ year: yearModel.year }, { $set: { description: yearModel.description } }, { upsert: true })
}

const deleteOne = year => {
  let db = dbUtil.getDb()
  return db.collection(collection).deleteOne({ year: year })
}

export default {
  getAll: getAll,
  insertOrUpdate, insertOrUpdate,
  deleteOne: deleteOne
}
