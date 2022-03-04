const items = require('../model/submit_item')
const mongoose = require('mongoose')



const get_landingPage = async (req, res) => {

    try{
        const item = await items.find().sort({itemDate: -1 } ).limit(10)
        res.render("Landing_page", {info:{activeAdmin : req.session.activeAdmin,latestItems:item}});
        
    }
    catch(e)
    {
        console.log(e.exception);
    }
}

module.exports ={
    get_landingPage
}