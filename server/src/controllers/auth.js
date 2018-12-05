import express from 'express'
import config from 'config/config'

const router = express.Router()
router.use(express.json())

router.get('/options', (req, res) => {
  res.json({ success: true, result: { client: config.jwt.audience, authority: config.jwt.authority } })
})

export default router
