const knex = require('../config/knex')

module.exports = app => {
    const resultado = async(req, res) => {
           const resposta = await knex.where({id :req.params.id})
                                .update({
                                        item :req.body.item,
                                        categoria :req.body.categoria,
                                        descricao :req.body.descricao,
                                        distribuidor :req.body.distribuidor,
                                        quantidade :req.body.quantidade,
                                        preco :req.body.preco  
                                })
                                .table('products')
                                .then(_=> res.status(201).json())
                                .catch(err => res.status(404).json(err))

           return { resposta }
    }


    const resultadoCliente = async(req, res) => {
        const resposta =  await knex.where({id :req.params.id})
                                .update({
                                        cnpj_razao :req.body.cnpj_razao,
                                        mercadoria :req.body.mercadoria,
                                        telefone :req.body.telefone,
                                        email :req.body.email,
                                        endereco :req.body.endereco,
                                        quantidade_mercadorias :req.body.quantidade_mercadorias     
                                })
                                .table('cliente')
                                .then(_=> res.status(201).json())
                                .catch(err => res.status(500).json(err))

        return { resposta }
    }

    return { resultado ,resultadoCliente}
}