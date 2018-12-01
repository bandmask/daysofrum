import app from 'app'
import dbUtil from 'utils/db'

dbUtil.connect((error) => {
  if (error) {
    throw error
  }

  app.init()
})
