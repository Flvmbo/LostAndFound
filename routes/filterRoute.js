const express = require("express")
var route = express.Router();
const lostItemsModel = require('../model/submit_item');
route.post("/filter", async (req, res)=>{
    let location = req.body['location[]'];
    let category = req.body['category[]'];
    console.log("category: ",category);
    console.log("location: ", location)


    // console.log(`Category is: ${req.body.category} while Location: ${req.body.location}`);
    // res.send(req.body)
    
    // console.log("category is: ", category);
    // req.session.sessionCategory = category;
    // req.session.sessionLocation = location;
    try{
        var lostItems = await lostItemsModel.find({Category:category, Location:location}).sort( {itemDate: -1 })   
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
