import express from 'express'

import yearRepository from 'repositories/years'
import jwtMiddleWare from 'utils/jwtMiddleWare'
import yearValidator from 'validators/years'

const router = express.Router()
router.use(express.json())

router.get('/', async (req, res) => {
  try {
    let result = await yearRepository.getAll()
    res.json({ statusCode: 200, result: result })
  } catch (exception) {
    res.json({ statusCode: 400, message: exception })
  }
})

router.post('/', jwtMiddleWare, async (req, res) => {
  let year = req.body
  if (yearValidator.validate(year)) {
    try {
      let result = await yearRepository.insertOrUpdate(year)
      res.json({ statusCode: 200, result: result })
    } catch (exception) {
      res.json({ statusCode: 400, message: error })
    }
  } else {
    res.json({ success: 400, message: 'incorrect model' })
  }
})

export default router
