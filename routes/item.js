const express = require('express')
const mongoose = require('mongoose')
const items = require('../dbSchema/submit_item')
const route  = express.Router()

route.post("/submit-item", async (req,res)=>{
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+time;
    const {item_name,Category,Description,Location,isRetrieved} = req.body
    var new_item = await new items({
        item_name : item_name,
        Category : Category,
        Description : Description,
        Location : Location,
        isRetrieved : isRetrieved,
        itemDate:  dateTime
    })
    new_item.save((err)=>{
        console.log(item_name+" "+Category+" "+Description+" "+dateTime)
    })
})



route.get("/allItems", async (req,res) => {
    try{
        const allItems = await items.find({
            isRetrieved : false
        })

        res.json(allItems)
    }

    catch(e)
    {
        console.log(e);
    }
})

module.exports = route