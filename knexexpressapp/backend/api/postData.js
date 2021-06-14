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

        const entrada = knex.insert(dados)
                            .table('items')
                            .then(items => res.status(204).json(items))
                            .catch(err => res.status(404).json(err))

        return { entrada }
    }

    return {  resultado  }
}