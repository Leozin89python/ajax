const port = 80
const express = require('express')
const app = express()
const cors = require('cors')
const db = require('./knex.js')

app.use(express.json())
app.use(express.urlencoded({ extended :true }))
app.use(cors({ origins :'*' }))

app.get('/', async(req, res) =>{
    const resultado = db.requisicao()
    return res.status(200).json(resultado)
})

app.listen(port, () =>{
    console.log(`online in port :${port}`)
})