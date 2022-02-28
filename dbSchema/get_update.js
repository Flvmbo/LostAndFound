const mongoose = require('mongoose');
const express = require("express")



var get_update = new mongoose.Schema({
    Firstname : {
        type : String,
        required : true
    },
    StudentEmail : {
        type : String,
        required : true
    },
    Category : {
        type : String,
        required : true
    },
    Item_name : {
        type : String,
        required : true
    },
    Description : {
        type : String,
        required : true
    }
})

var get_update_schema = mongoose.model("get update",get_update)
module.exports = get_update_schema