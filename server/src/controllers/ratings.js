import express from 'express'
import dbUtil from 'utils/db'

const router = express.Router()

router.get('/', (req, res) => {
  let db = dbUtil.getDb()

  let year = parseInt(req.query.year)

  db.collection('ratings').find({ year: year }).toArray((err, result) => {
    if (err) return console.log('error fetching ratings for ' + year)

    res.json(result)
  })
})

export default router
