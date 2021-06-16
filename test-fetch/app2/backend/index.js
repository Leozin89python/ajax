const port = 3000
const express = require('express')
const app = express()
const consign = require('consign')
const db = require('./config/knex.js')

consign()
    .then('./config/middlewares.js')
    .then('./api')
    .then('./config/routes.js')
    .into(app)

app.db = db

app.listen(port,() =>{
    console.log(`online into port :${port}`)
})