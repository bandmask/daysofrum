const collection = 'years'

const getAll = (db, callback) => {
  db.collection(collection).find().toArray(callback)
}

const insertOrUpdate = (db, yearModel, calcback) => {
  return db.collection(collection).findOneAndUpdate(
    { year: yearModel.year },
    { $set: { description: yearModel.description } },
    { upsert: true },
    calcback)
}

const deleteModel = (db, year, callback) => {
  db.collection(collection).findOneAndDelete(
    { year: year },
    {},
    callback)
}

const deleteById = (db, id, callback) => {
  db.collection(collection).deleteOne(
    { _id: id },
    {},
    callback
  )
}

export default {
  getAll: getAll,
  insertOrUpdate, insertOrUpdate,
  delete: deleteModel,
  deleteById: deleteById
}
