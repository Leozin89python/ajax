const knex = require('../config/knex')

module.exports = application => {
    const resultado = async(req, res) => {
        
        const saida = knex.select('*')
                          .table('items')
                          .then(items => res.status(200).json(items))
                          .catch(err => res.status(500).json(err))   
        
        return {  saida  }
    }

    return {  resultado  }
}