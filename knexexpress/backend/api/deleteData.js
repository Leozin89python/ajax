const knex = require('../config/knex')

module.exports = app => {
    const resultado = async(req, res) => {
        const resposta = await knex.where({id :req.params.id})
                                .delete()
                                .table('products')
                                .then(_=> res.status(204).json())
                                .catch(err => res.status(500).json(err))

        { resposta }
    }

    const resultadoCliente = async(req, res) => {
        const resposta =  await knex.where({id :req.params.id})
                                .delete()
                                .table('cliente')
                                .then(_=> res.status(204).json())
                                .catch(err => res.status(500).json(err))

        return { resposta }
    }

    return { resultado ,resultadoCliente }
}