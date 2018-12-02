import express from 'express'
import multer from 'multer'
import sharp from 'sharp'

import jwtMiddleWare from 'utils/jwtMiddleWare'

import ratingsRepository from 'repositories/ratings'
import imageRepository from 'repositories/images'
import ratingValidator from 'validators/ratings'

const router = express.Router()
var fileUpload = multer({ storage: multer.memoryStorage() }).single('rumImage')

router.post('/:year/:day', jwtMiddleWare, fileUpload, async (req, res) => {
  let year = parseInt(req.params.year)
  let day = parseInt(req.params.day)

  if (ratingValidator.validateYearAndDay(year, day)) {
    let rumImage = req.file
    let imageResult = await handleBuffer(rumImage.buffer)
    if (imageResult.success) {
      try {
        let rating = await ratingsRepository.getByYearAndDay(year, day)
        let insertResult = await imageRepository.insertOrUpdate(rating._id, imageResult.result)
        res.json({ statusCode: 200, result: insertResult })
      } catch (exception) {
        res.json({ success: 400, message: exception })
      }
    } else {
      res.json({ success: 400, message: 'error handling image' })
    }
  } else {
    res.json({ success: 400, message: 'incorrect model' })
  }
})

const handleBuffer = buffer => {
  return sharp(buffer)
    .resize(200, 200, { fit: 'inside' })
    .toBuffer()
    .then(data => ({ success: true, result: data.toString('base64') }))
    .catch(error => ({ success: false, error: error }))
}

export default router
