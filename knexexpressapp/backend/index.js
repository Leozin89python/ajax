const port = 3000
const express = require('express')
const application = express()
const consign = require('consign')
const db = require('./config/knex')

consign()
    .then('./config/xp.js')
    .then('./api')
    .then('./config/routes.js')
    .into(application)

application.db = db

application.listen(port, () =>{
    console.log(`online in ${port}`)
})
