const knex = require('../config/knex')

module.exports = app => {
    const resultado = async(req, res) => {
        const resposta = await knex.select('*')
            .table('products')
            .then(produtos => res.status(200).json(produtos))
            .catch(err => res.status(500).json(err))

        return { resposta }
    }

    const resultadoCliente = async(req, res) => {
        const resposta = await knex.select('*')
            .table('cliente')
            .then(cliente => res.status(200).json(cliente))
            .catch(err => res.status(500).json(err))

        return { resposta }
    }

    return { resultado ,resultadoCliente }
}