const express = require('express')
const mongoose = require('mongoose')
const items = require('../dbSchema/submit_item')
const route  = express.Router()

route.post("/submit-item", async (req,res)=>{
    const {item_name,Category,Description,Location,isRetrieved} = req.body
    var new_item = await new items({
        item_name : item_name,
        Category : Category,
        Description : Description,
        Location : Location,
        isRetrieved : isRetrieved,
        itemDate:  Date.now()
    })
    new_item.save((err)=>{
        console.log(item_name+" "+Category+" "+Description+" "+ new Date.now())
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