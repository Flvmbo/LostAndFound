const express = require('express')
const mongoose = require('mongoose')
const submit_item = require('../dbSchema/submit_item')
const route  = express.Router()

route.post("/", async (req,res)=>{
    const {name,cat,desc,loc} = req.body
    var new_item = await new submit_item({
        item_name : name,
        Category : cat,
        Description : desc,
        Location : loc
    })
    new_item.save((err)=>{
        console.log(name+" "+cat+" "+desc)
    })
})