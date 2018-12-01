import path from 'path'
import fs from 'fs'

var configPath = path.resolve(`${__dirname}/settings.json`)
const settings = JSON.parse(fs.readFileSync(configPath, 'utf8'))

const jwt = settings.jwtSignerSettings
const db = settings.databaseSettings

export default {
  jwt: jwt,
  db: db
}
