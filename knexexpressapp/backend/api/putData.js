const knex = require('../config/knex')

module.exports = application => {
    const resultado = async(req, res) => {

        let dados = {
            nome :req.body.nome,
            categoria :req.body.categoria, 
            preco :req.body.preco, 
            quantidade :req.body.quantidade,
            distribuidor :req.body.distribuidor
        }

        const alterado = knex.where({id :req.params.id})
                             .update(dados)
                             .table('items')
                             .then(_=> res.status(204).json())
                             .catch(err => res.status(404).json(err))
    
        return { alterado }    
    }

    return {  resultado  }
}