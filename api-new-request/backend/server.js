const port    = 8081

const express = require('express')
const app     = express()

const cors    = require('cors')
const {uuid}  = require('uuidv4')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

let items = []

app.get('/server',(req,res)=>{
    return res.status(200)
              .json(items)
})

app.post('/server',(req,res)=>{
    let id = uuid()
    let data = {
        id,
        nome:req.body.nome,
        promo:req.body.promo,
        preco:req.body.preco
    }
    items.push(data)
    return res.status(201)
              .json({msg:'Inception OK!'})
})

app.delete('/server/:id',(req,res)=>{
    const { id } = req.params
    let search = items.findIndex(indice => indice.id === id)
    if(search < 0){
        return res.status(404)
                  .json({msg:'Object not found!'})
    }
    items.splice(search, 1)
    return res.status(200)
              .json({msg:'Object excluded with success!'})
})

app.listen(port,() =>{
    console.log(`online in port ${port}`)
})