const knex = require('../config/knex')

module.exports = app => {
    let getPeopleById = async(req, res) => {
        let get = await knex.where({ id :req.params.id })
                            .select('*')
                            .table('pessoa')
                            .then(pessoal => res.status(200).json(pessoal))
                            .catch(err => res.status(500).json(err))
    } 

    return { getPeopleById }
}