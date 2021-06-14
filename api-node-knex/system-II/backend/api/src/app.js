const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.json({type: 'application/vnd.api+json'}))
app.use(express.urlencoded({    extended:true   }))
