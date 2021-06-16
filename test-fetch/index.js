const port = 3000
const express = require('express')
const app = express()
const cors = require('cors')


app.use(express.urlencoded({extended :true}))
app.use(express.json())
app.use(cors({
    origin :'*'
}))

const data = []

app.get('/',(req, res) => {
    return res.status(200).json(data)
})

app.post('/insert',(req, res) => {
    

    let dados = {
        id :req.body.id,
        item :req.body.item,
        preco :req.body.preco
    }

   let insercao = data.push(dados)
   return res.status(201).json(insercao)
})

app.delete('/delete',(req,res)=>{
    const { id } = req.body

    const encontra = data.find(indice => indice.id === id)
    data.splice(encontra, 1)

    return res.status(204).json({})
})

app.listen(port)