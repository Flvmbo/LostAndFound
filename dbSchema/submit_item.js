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
    },
    isRetrieved:{
        type:Boolean,
        required:false,
        default:false
    },
    itemDate:{
        type:Date,
        required:false,
        default: ""
    }
    ,
    firstImage: {
       type:String,
       default: ""
    },
    secondImage:{
        type:String,
        default: ""
    }
})

var submit_item_schema = mongoose.model("submit Item",submit_item)
module.exports = submit_item_schema