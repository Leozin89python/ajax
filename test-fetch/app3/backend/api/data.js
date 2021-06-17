const knex = require('../config/knex.js')

module.exports = app => {
    const saida = async(req, res) => {
          const resultado = knex.select('*')
                              .table('products')
                              .then(prod => res.status(200).json(prod))
                              .catch(err => res.status(404).json(err))
    
         return { resultado }
    } 

    const entrada = async(req, res) => {
        const resultado = knex.insert({
                                    item  :req.body.item,
                                    categ :req.body.categ,
                                    preco :req.body.preco,
                                    qtde  :req.body.qtde
                                })
                              .table('products')
                              .then(prod => res.status(201).json(prod))
                              .catch(err => res.status(404).json(err))

        return { resultado }
    }

    return { saida , entrada }
}