import express from 'express'

import jwtMiddleWare from 'utils/jwtMiddleWare'

import yearRepository from 'repositories/years'
import yearValidator from 'validators/years'

const router = express.Router()
router.use(express.json())

router.get('/', async (req, res) => {
  try {
    let result = await yearRepository.getAll()
    let models = toModels(result)
    res.json({ success: true, result: models })
  } catch (exception) {
    res.json({ success: false, message: exception })
  }
})

router.post('/', jwtMiddleWare, async (req, res) => {
  let year = req.body
  if (yearValidator.validate(year)) {
    try {
      await yearRepository.insertOrUpdate(year)
      res.json({ success: true })
    } catch (exception) {
      res.json({ success: false, message: error })
    }
  } else {
    res.json({ success: false, message: 'incorrect model' })
  }
})

const toModels = results => {
  return results.map(result => toModel(result))
}

const toModel = result => {
  return {
    year: result.year,
    description: result.description
  }
}

export default router
