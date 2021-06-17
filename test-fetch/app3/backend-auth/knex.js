const file = require('./knexfile.js')
const knex = require('knex')(file)

function requisicao() {
    const resultado = knex.select('*')
                          .table('autenticacao1')
                          .then(res =>  res)
                          .catch(err => err)

    return { resultado }
}

module.exports = {  requisicao  }