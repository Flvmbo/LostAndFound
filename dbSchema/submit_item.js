const mongoose = require('mongoose');
const express = require("express")
const bodyParser = require("body-parser")


var submit_item = new mongoose.Schema({
    item_name : {
        type : String,
        required : true
    },
    Category : {
        type : String,
        required : true
    },
    Description : {
        type : String,
        required : true
    },
    Location : {
        type : String,
        required : true
    }
})

var submit_item_schema = mongoose.model("submit Item",submit_item)
module.exports = submit_item_schema