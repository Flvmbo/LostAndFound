const express = require('express')
const mongoose = require('mongoose')
const user = require('../dbSchema/users')
const route  = express.Router()


route.post('/signin',(req,res) => {
    console.log(req);
    res.json('we in this')
})

module.exports = route
