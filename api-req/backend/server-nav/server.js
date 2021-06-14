const port = 8081

const express = require('express')
const app = express()

const cors = require('cors')
const { uuid } = require('uuidv4')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

let promotion = []

app.get('/server',(req,res)=>{
    return res.status(200).json(promotion)
})

app.post('/server',(req,res)=>{
    let id = uuid()

    let marketing = {
        id,
        msg:req.body.msg
    }

    promotion.push(marketing)
    return res.status(201).json(marketing)
})

app.delete('/server/:id',(req,res)=>{
    const { id } = req.params

    let search = promotion.findIndex(index => index.id === id)
    if(search < 0){
        return res.status(404).json({msg:'Object not found!'})
    }

    promotion.splice(search, 1)
    return res.status(204).json([])
})


app.listen(port,()=>{
    console.log(`online in port ${port}`)
})