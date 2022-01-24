const express = require('express')
const mongoose = require('mongoose')
const submit_item = require('../dbSchema/submit_item')
const route  = express.Router()

route.post("/", async (req,res)=>{
    const {f_item_name,f_category,f_description, f_location} = req.body
    var new_item = await new submit_item({
        item_name : f_item_name,
        Category : f_category,
        Description : f_description,
        Location : f_location
    })
    new_item.save((err)=>{
        // console.log(name+" "+cat+" "+desc)
        console.log(err)

    })

    // res.redirect("/")

})

module.exports = route