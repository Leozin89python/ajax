const port = 8080

const express = require('express')
const app = express()

const cors = require('cors')
const { uuid } = require('uuidv4')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({
    extended:true
}))

let places = []

app.get('/server',(req,res)=>{
    return res.status(200).json(places)
})

app.post('/server', async (req,res) =>{
    let id = uuid()

    let geography = {
        id,
        city: req.body.city,
        country:req.body.country
    }

    places.push(geography)
    return res.status(201)
              .json(geography)
              
})

app.listen(port,()=>{
    console.log(`online in port: ${port}`)
})