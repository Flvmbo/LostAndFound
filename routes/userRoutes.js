const express = require('express')
const mongoose = require('mongoose')
const user = require('../dbSchema/users')
const route  = express.Router()
const session = require('express-session')


route.post('/signin',async (req,res) => {
    // const {username,password} = req.body

    // console.log(username);

    try{
        const users = await user.create(req.body)
        const savedUser = await users.save()
        res.json(savedUser)
    }
    catch(e)
    {
        console.log(e);
    }
    
})

module.exports = route
