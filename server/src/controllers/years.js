import express from 'express'
import dbUtil from 'utils/db'
import jwtMiddleWare from 'utils/jwtMiddleWare'

const router = express.Router()

router.get('/', (req, res) => {
  let db = dbUtil.getDb()

  db.collection('years').find().toArray((err, result) => {
    if (err) return console.log('error fetching years')

    res.json(result)
  })
})

export default router
