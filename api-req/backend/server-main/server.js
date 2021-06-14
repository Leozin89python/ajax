const port = 8080

const express = require('express')
const app = express()

const cors = require('cors')
const { uuid } = require('uuidv4')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

let products = []

app.get('/server',(req,res)=>{
    return res.status(200).json(products)
})

app.post('/server',(req,res)=>{
    let id = uuid()

    let items = {
        id,
        system:req.body.system,
        service:req.body.service,
        price:req.body.price
    } 

    products.push(items)
    return res.status(201).json(items)
})

app.delete('/server/:id',(req,res)=>{
    const { id } = req.params

    let search = products.findIndex(index => index.id === id)
    if(search < 0){
        return res.status(404).json({msg:'Object not found!'})
    }

    products.splice( search, 1)
    return res.status(204).json([])
})

app.listen(port,()=>{
    console.log(`online in port ${port}`)
})