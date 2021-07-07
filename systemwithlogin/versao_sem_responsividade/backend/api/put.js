const knex = require('../config/knex')

module.exports = app => {
    let updatePeople = async(req, res) => {

        let people = {
              
              name       :req.body.name,
              job        :req.body.job,
              department :req.body.department,
              salary     :req.body.salary

        }

        let update = await knex.where({ id: req.params.id })
                               .update(people)
                               .table('pessoa')
                               .then(_=> res.status(201).json())
                               .catch(err => res.status(404).json(err))                              
    } 

    return { updatePeople }
}