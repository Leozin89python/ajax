const knex = require('../config/knex')

module.exports = application => {
    const resultado = async(req, res) => {
        const descarte = knex.where({id :req.params.id})
                             .delete()
                             .table('items')
                             .then(_=>  res.status(204).send())
                             .catch(err => res.status(404).json(err))
    }

    return {  resultado  }
}