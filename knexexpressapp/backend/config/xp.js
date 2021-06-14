const express = require('express')
const cors    = require('cors')

module.exports = application => {
    application.use(express.json())
    application.use(express.urlencoded({
        extended :true
    }))
    application.use(cors({
        origin:'*'
    }))
}