import jwt from 'jsonwebtoken'
import config from 'config/config'

const getJwtOptions = config => ({
  secret: config.secret,
  options: {
    issuer: config.issuer,
    audience: config.audience,
    algorithms: ['HS256']
  }
})

const jwtOptions = getJwtOptions(config.jwt)

const verify = (req, res, next) => {
  try {
    const header = req.headers['authorization']
    var jwtToken = header.split(' ')[1]

    jwt.verify(jwtToken, jwtOptions.secret, jwtOptions.options)
    next()
  } catch (exception) {
    res.json({ statusCode: 401, message: exception })
  }
}

export default verify
