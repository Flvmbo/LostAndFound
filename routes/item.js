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
    const {item_name,Category,Description,Location} = req.body
    try{
        var new_item =  new items({
            item_name : item_name,
            Category : Category,
            Description : Description,
            Location : Location,
            itemDate:  dateTime,
            firstImage:  "uploads/images/" + req.files[0].filename, 
            secondImage: "uploads/images/" + req.files[1].filename
        })
        
        if(req.files){
            console.log("File is: " ,req.files)
        }
    
       await new_item.save().then(()=>{res.redirect('/lost-items')})
        

    }catch(e){
        console.log(e.message);
    }
   
})



route.get("/lost-items", async (req,res) => {
    try{
        const allItems = await items.find({})
        res.render("lost_items_page",{items:{item:allItems}})
    }
    catch(e)
    {
        console.log(e);
    }
})

module.exports = route