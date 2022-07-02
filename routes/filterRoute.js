const express = require("express")
var route = express.Router();
const lostItemsModel = require('../model/submit_item');
route.post("/", async (req, res)=>{
    let location = req.body['location[]'];
    let category = req.body['category[]'];
    let dates = req.body['dates[]'];
    let sort = req.body['sort[]'];
    const sortValue = sort=="ascending"?1:-1;
    let startDate = dates[0];
    let endDate = dates[1];
    console.log("New Request + \n");
    console.log(sort);
    console.log(dates)
    console.log("category: ",category);
    console.log("location: ", location)

    try{
        var lostItems = await lostItemsModel.find({Category:category, Location:location, itemDate:{
            $gte: new Date(new Date(startDate).setHours(00, 00, 00)),
            $lt: new Date(new Date(endDate).setHours(23, 59, 59))
        }}).sort( {itemDate: sortValue })   
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
