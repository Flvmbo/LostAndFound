const express = require('express')
const mongoose = require('mongoose')
const items = require('../dbSchema/submit_item')
const route  = express.Router()
const multer = require('multer');
const upload = require('../middleware/upload')
const path = require("path")

route.post("/api/v1/submit-item", upload.array("image"), async (req,res)=>{
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+time;
    const {item_name,Category,Description,Location,isRetrieved} = req.body
    try{
        var new_item = await new items({
            item_name : item_name,
            Category : Category,
            Description : Description,
            Location : Location,
            isRetrieved : isRetrieved,
            itemDate:  dateTime,
            firstImage:  "uploads/images/" + req.files[0].filename, 
            secondImage: "uploads/images/" + req.files[1].filename
        })
        
        if(req.files){
            console.log("File is: " ,req.files)
        }
    
        new_item.save((err)=>{
            // console.log(err);
            console.log(item_name+" "+Category+" "+Description+" "+dateTime + new_item.firstImage + " " + new_item.secondImage)
        })
        // console.log(first_image);
        res.redirect("/lost-items")
    }catch(e){
        console.log(e.message);
    }
   
})



route.get("/lost-items", async (req,res) => {
    try{
        const allItems = await items.find({
            isRetrieved : false
        })

        res.render("lost_items_page",{items:{item:allItems}})
    }

    catch(e)
    {
        console.log(e);
    }
})

module.exports = route