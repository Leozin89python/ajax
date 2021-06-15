const knex = require('../config/knex')

module.exports = app => {
    const resultado = async(req, res) => {
        const resposta = knex.insert({
                                      item :req.body.item,
                                      categoria :req.body.categoria,
                                      descricao :req.body.descricao,
                                      distribuidor :req.body.distribuidor,
                                      quantidade :req.body.quantidade,
                                      preco :req.body.preco  
                                     })
                             .table('products')
                             .then(produtos => res.status(201).json(produtos))
                             .catch(err => res.status(404).json(err))

            return { resposta }
    }

    return { resultado }
}