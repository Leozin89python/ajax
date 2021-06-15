const database = require('../knexfile')
const knex = require('knex')(database)

module.exports = knex