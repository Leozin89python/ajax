const xp   = require('express')
const cors = require('cors')

module.exports = app => {
    app.use(xp.json())
    app.use(xp.urlencoded({ extended :true }))
    app.use(cors({ origins :'*' }))
}