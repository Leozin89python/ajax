const knex = require('../config/knex')

module.exports = app => {
    const resultado = async(req, res) => {
        const resposta = knex.select('*')
            .table('products')
            .then(produtos => res.status(200).json(produtos))
            .catch(err => res.status(500).json(err))

return { resposta }
    }

    return { resultado }
}