const knex = require('../config/knex.js')

module.exports = app => {
    const saida = (req, res) => {
        const resultado = knex.select('*')
                              .table('test_fetch')
                              .then(resp => res.status(200).json(resp))
                              .catch(err => res.status(500).json(err))

        return { resultado }
    }

    const entrada = (req, res) => {
         const resultado = knex.insert({
                                    item :req.body.item,
                                    qtde :req.body.qtde
                                })
                              .table('test_fetch')
                              .then(resp => res.status(200).json(resp))
                              .catch(err => res.status(500).json(err))

        return { resultado }
    }

    return { saida, entrada }
}