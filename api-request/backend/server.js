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

let data = []

app.get('/server',(req,res)=>{
    return res.status(200)
              .json(data)
})

app.post('/server', (req,res)=>{
    let id = uuid()

    let formulary = {
        id,
        name:req.body.name,
        age:req.body.age,
        sex:req.body.sex,
        job:req.body.job,
        adress:req.body.adress
    }

    data.push(formulary)
    return res.status(201)
              .json(formulary)
})


app.delete('/server/:id', (req, res) =>{
    const { id } = req.params

    let search = data.findIndex(i => i.id === id)
    if(search < 0){
        return res.status(404).send({msg:'Object not found'})
    }

    data.splice(search,1)
    return res.status(204)
              .send([])
})

app.listen(port,()=>{
    console.log(`online in port ${port}`)
})