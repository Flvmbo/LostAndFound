const express = require("express")
var route = express.Router();
const lostItemsModel = require('../model/submit_item');
route.post("/filter", async (req, res)=>{
    console.log("received", req.body);
    let {category, location} = req.body;
    console.log("category is: ", category);
    req.session.sessionCategory = category;
    req.session.sessionLocation = location;
    try{
        var lostItems = await lostItemsModel.find({}).sort( {itemDate: -1 })   
        const number = lostItems.length;
        console.log("number of items: ",  number)
        res.render("filter_page",{items:{item:lostItems, activeAdmin: req.session.activeAdmin, num:number}})
    }
    catch(e)
    {
        console.log(e);
    }
    // res.send("Received")
})

module.exports = route;
