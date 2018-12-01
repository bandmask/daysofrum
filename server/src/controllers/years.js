import express from 'express'
import dbUtil from 'utils/db'

import yearRepository from 'repositories/year'

import jwtMiddleWare from 'utils/jwtMiddleWare'
import yearValidator from 'validators/year'

const router = express.Router()

router.use(express.json())

router.get('/', (req, res) => {
  yearRepository.getAll(dbUtil.getDb(), (error, result) => {
    if (error) {
      res.json({ statusCode: 400, message: error })
      return
    }
    res.json({ statusCode: 200, result: result })
  })
})

router.post('/', jwtMiddleWare, (req, res) => {
  let year = req.body
  if (yearValidator(year)) {
    yearRepository.insertOrUpdate(dbUtil.getDb(), year, (error, result) => {
      if (error) {
        res.json({ statusCode: 400, message: error })
        return
      }
      res.json({ statusCode: 200, result: result })
    })
  } else {
    res.json({ success: 400, message: 'incorrect model' })
  }
})

export default router
