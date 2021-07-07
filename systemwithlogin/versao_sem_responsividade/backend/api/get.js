const knex = require('../config/knex')

module.exports = app => {
    let getPeople = async(req, res) => {
        let get = await knex.select('*')
                            .table('pessoa')
                            .then(pessoal => res.status(200).json(pessoal))
                            .catch(err => res.status(500).json(err))
    } 

    return { getPeople }
}