import express from 'express'
import dbUtil from 'utils/db'

const router = express.Router()

router.use(express.json())

router.get('/', (req, res) => {
  let db = dbUtil.getDb()

  let year = parseInt(req.query.year)

  db.collection('ratings').find({ year: year }).toArray((err, result) => {
    if (err) return console.log('error fetching ratings for ' + year)

    res.json(result)
  })
})

router.post('/', (req, res) => {
  let db = dbUtil.getDb()
  let year = req.body

  if (year.year && year.description) {
    db.collection('years').insertOne(year, (err, res) => {
      if (err) {
        throw err
      }
    })

    res.json({ success: 200 })
    return
  }

  res.json({ success: 400 })
})

router.post('/image', (req, res) => {
  let db = dbUtil.getDb()

  let year = parseInt(req.query.year)
  let day = parseInt(req.query.day)




})

export default router
