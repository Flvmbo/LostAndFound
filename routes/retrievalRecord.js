const express = require("express")
const retrieved_items = require("../dbSchema/retrieve_Item")
var route = express.Router()

route.get("/retrieval-records", async (req,res)=>{
    try{
        var retrieved_items_array = await retrieved_items.find({})
        res.render("item_retrieval_record_page", {info:{items:retrieved_items_array}})
    }catch(err){
        console.log(err)
    }
})

module.exports = route