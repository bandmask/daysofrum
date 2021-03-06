import express from 'express'

import yearsController from 'controllers/years'
import ratingsController from 'controllers/ratings'
import imageController from 'controllers/images'
import authController from 'controllers/auth'

const port = 49260

const init = () => {
  let app = express()
  app.use(express.static(__dirname))

  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods", "GET, POST, DELETE, OPTIONS")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization")
    next()
  })

  app.listen(port, () => {
    console.log('listeneing on port ' + port)
  })

  app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
  })

  app.use('/api/years', yearsController)
  app.use('/api/ratings', ratingsController)
  app.use('/api/images', imageController)
  app.use('/api/auth', authController)
}

export default {
  init: init
}
