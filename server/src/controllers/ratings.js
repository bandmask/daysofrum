import express from 'express'

import jwtMiddleWare from 'utils/jwtMiddleWare'

import ratingsRepository from 'repositories/ratings'
import imageRepository from 'repositories/images'
import ratingValidator from 'validators/ratings'

const router = express.Router()
router.use(express.json())

router.get('/', async (req, res) => {
  try {
    var result = await ratingsRepository.getAll()
    var models = await toModels(result)
    res.json({ success: true, result: models })
  } catch (exception) {
    res.json({ success: false, message: exception })
  }
})

router.get('/:year', async (req, res) => {
  let year = parseInt(req.params.year)
  try {
    var result = await ratingsRepository.getByYear(year)
    var models = await toModels(result)
    res.json({ success: true, result: models })
  } catch (exception) {
    res.json({ success: false, message: exception })
  }
})

router.get('/:year/:day', async (req, res) => {
  let year = parseInt(req.params.year)
  let day = parseInt(req.params.day)

  if (ratingValidator.validateYearAndDay(year, day)) {
    try {
      let result = await ratingsRepository.getByYearAndDay(year, day)
      let model = await toModel(result)
      res.json({ success: true, result: model })
    } catch (exception) {
      res.json({ success: false, message: exception })
    }
  } else {
    res.json({ success: false, message: 'incorrect model' })
  }
})

router.post('/', jwtMiddleWare, async (req, res) => {
  let ratingModel = convert(req.body)

  if (ratingValidator.validate(ratingModel)) {
    try {
      await ratingsRepository.insertOrUpdate(ratingModel)
      res.json({ success: true })
    } catch (exception) {
      res.json({ success: false, message: exception })
    }
  } else {
    res.json({ success: false, message: 'incorrect model' })
  }
})

router.delete('/:year/:day', jwtMiddleWare, async (req, res) => {
  let year = parseInt(req.params.year)
  let day = req.params.day

  try {
    await ratingsRepository.deleteOne(year, day)
    res.json({ success: true })
  } catch (exception) {
    res.json({ success: false, message: exception })
  }
})

const convert = fromBody => {
  return {
    year: parseInt(fromBody.year),
    day: parseInt(fromBody.day),
    rating: parseFloat(fromBody.rating),
    percentage: parseFloat(fromBody.percentage),
    name: fromBody.name,
    note: fromBody.note,
    origin: fromBody.origin,
  }
}

const toModel = async result => {
  return {
    year: result.year,
    day: result.day,
    name: result.name,
    origin: result.origin,
    percentage: result.percentage,
    rating: result.rating,
    note: result.note,
    image: await getImage(result._id)
  }
}

const toModels = async results => {
  return await Promise.all(results.map(result => toModel(result)))
}

const getImage = async id => {
  try {
    let imageModel = await imageRepository.get(id)
    return imageModel.image
  } catch (exception) {
    return null
  }
}

export default router
