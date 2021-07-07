const knex = require('../config/knex')

module.exports = app => {
    let deletePeople = async(req, res) => {

        let deletePerson = await knex.where({ id: req.params.id })
                               .delete()
                               .table('pessoa')
                               .then(_=> res.status(204).json())
                               .catch(err => res.status(404).json(err))                              
    } 

    return { deletePeople }
}