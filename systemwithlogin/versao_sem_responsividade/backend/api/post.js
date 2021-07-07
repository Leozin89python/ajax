const knex = require('../config/knex')

module.exports = app => {
    let insertPeople = async(req, res) => {

        let people = {
              
              name       :req.body.name,
              job        :req.body.job,
              department :req.body.department,
              salary     :req.body.salary

        }

        let post = await knex.insert(people)
                             .table('pessoa')
                             .then(pessoal => res.status(201).json(pessoal))
                             .catch(err => res.status(404).json(err))
    } 

    return { insertPeople }
}