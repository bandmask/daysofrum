import dbUtil from 'utils/db'

const collection = 'ratings'

const getAll = () => {
  let db = dbUtil.getDb()
  return db.collection(collection).find().toArray()
}

const getByYear = (year) => {
  let db = dbUtil.getDb()
  return db.collection('ratings').find({ year: year }).toArray()
}

const getByYearAndDay = (year, day) => {
  let db = dbUtil.getDb()
  return db.collection('ratings').findOne({ year: year, day: day })
}

const insertOrUpdate = (ratingsModel) => {
  let db = dbUtil.getDb()
  return db.collection(collection).findOneAndUpdate({ year: ratingsModel.year, day: ratingsModel.day },
    {
      $set: {
        name: ratingsModel.name,
        origint: ratingsModel.origint,
        rating: ratingsModel.rating,
        note: ratingsModel.note,
        percentage: ratingsModel.percentage
      }
    }, { upsert: true })
}

export default {
  getAll: getAll,
  getByYear: getByYear,
  getByYearAndDay: getByYearAndDay,
  insertOrUpdate: insertOrUpdate
}
