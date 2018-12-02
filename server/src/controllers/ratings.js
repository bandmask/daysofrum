import express from 'express'

import ratingsRepository from 'repositories/ratings'
import ratingValidator from 'validators/ratings'

const router = express.Router()
router.use(express.json())


router.get('/', async (req, res) => {
  try {
    var result = await ratingsRepository.getAll()
    res.json({ statusCode: 200, result: result })
  } catch (exception) {
    res.json({ statusCode: 400, message: exception })
  }
})

router.get('/:year', async (req, res) => {
  let year = parseInt(req.params.year)
  try {
    var result = await ratingsRepository.getByYear(year)
    res.json({ statusCode: 200, result: result })
  } catch (exception) {
    res.json({ statusCode: 400, message: exception })
  }
})

router.get('/:year/id/:day', async (req, res) => {
  let year = parseInt(req.params.year)
  let day = parseInt(req.params.day)

  if (ratingValidator.validateYearAndDay(year, day)) {
    try {
      let result = await ratingsRepository.getByYearAndDay(year, day)
      res.json({ statusCode: 200, id: result._id })
    } catch (exception) {
      res.json({ statusCode: 400, message: exception })
    }
  } else {
    res.json({ success: 400, message: 'incorrect model' })
  }
})

router.post('/', async (req, res) => {
  let ratingModel = req.body

  if (ratingValidator.validate(ratingModel)) {
    try {
      let result = await ratingsRepository.insertOrUpdate(ratingModel)
      res.json({ statusCode: 200, result: result })
    } catch (exception) {
      res.json({ statusCode: 400, message: exception })
    }
  } else {
    res.json({ success: 400, message: 'incorrect model' })
  }
})

router.post('/image/:docId', (req, res) => {
  var id = req.params.docId
  let image = req.body

  console.log(`posting image for ${id}: ${image}`)
  res.json({ statusCode: 200, result: image })
})

export default router
