const express = require("express")
var route = express.Router();
const lostItemsModel = require('../model/submit_item');
route.post("/filter", async (req, res)=>{
    console.log("received", req.body);
    let {category, location} = req.body;
    //console.log("category is: ", category);
    req.session.sessionCategory = category;
    req.session.sessionLocation = location_array = location.split(",");
    console.log("category is: ");

    try{
        if(req.session.sessionCategory == ""){
            var lostItems = await lostItemsModel.find({Location : req.session.sessionLocation}).sort( {itemDate: -1 })   
        }else if(req.session.sessionLocation == ""){
            var lostItems = await lostItemsModel.find({Category : req.session.sessionCategory}).sort( {itemDate: -1 })   
        }else{
            var lostItems = await lostItemsModel.find({Category : req.session.sessionCategory, Location : req.session.sessionLocation}).sort( {itemDate: -1 })   
        }
        
        const number = lostItems.length;
        console.log("number of items: ",  number)
        res.render("filter_page", {items:{item:lostItems, activeAdmin: req.session.activeAdmin, num:number , category : req.session.sessionCategory , location : req.session.sessionLocation}})
    }
    catch(e)
    {
        console.log(e);
    }
    // res.send("Received")
})

module.exports = route;
