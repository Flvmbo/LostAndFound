const express = require("express")
const mongoose = require("mongoose")
const get_update_schema = require("../dbSchema/get_update")
let info = {};
var route = express.Router();


route.post("/get-update", async (req,res)=>{

    var {firstname,student_email, item_category,item_name, description} = req.body
    try{
        var new_update = new get_update_schema({
            Firstname : firstname,
            StudentEmail : student_email,
            Category : item_category,
            Item_name : item_name,
            Description : description
        })
        
        new_update.save().then(()=>{
            console.log(new_update)
            res.render("get_update",{info:{popup:"show"}})
            // res.redirect("/lost-items")
        })
    }catch(err){
        console.log(err)
    }
})

module.exports = route