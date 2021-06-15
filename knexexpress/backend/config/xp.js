const express = require('express')
const permission = require('cors') 

module.exports = app => {
    app.use(express.json())
    app.use(express.urlencoded({ extended:true }))
    app.use(permission({
        origin:'*'
    }))
}