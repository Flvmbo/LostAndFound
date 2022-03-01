const express = require("express")
var route = express.Router()

route.get("/item-retrieval-checkpage/:id/", async (req,res)=>{
    try{
        uniqueID = req.params.uniqueID
        id = req.params.id
        res.render("admin_signin_page", {info: {from : "check_page", id :  id} })
    }catch(err){
        console.log(err)
    }
})

module.exports = route