const port = 8080

const express = require('express')
const app = express()

const { uuid } = require('uuidv4')

const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({
    extended:true
}))

let data = []

app.get('/server',(req,res)=>{
    return res.status(200)
			  .json(data)
              
})

app.post('/server', async(req,res)=>{
    let id = uuid()

    let info = {
        id,
        city:req.body.city,
        country:req.body.country
    }

    await data.push(info)
    return res .status(201)
			   .json(info)
})

app.listen(port,()=>{
    console.log(`online in port: ${port}`)
})

