const express = require('express')
const mongoose = require('mongoose')
const submit_item = require('../dbSchema/submit_item')
const route  = express.Router()
const bodyParser = require("body-parser")
const urlencode = bodyParser.urlencoded({extended : false})


route.post("/", urlencode , async (req,res)=>{
    const {f_item_name,f_category,f_description, f_location} = req.body
    try{
        var new_item = await new submit_item({
            item_name : f_item_name,
            Category : f_category,
            Description : f_description,
            Location : f_location
        })
        try{
            new_item.save()
        }catch(err){
            console.log("Items could not save")
        }
    }catch(err){
        console.log("No data")
    }
    res.redirect("/")
})

module.exports = route