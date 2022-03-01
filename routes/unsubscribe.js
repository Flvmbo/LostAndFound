const express = require("express")
const get_update_schema = require("../dbSchema/get_update")

var route = express.Router()

route.post("/unsubscribe", async(req,res)=>{
    var {email} = req.body
    try{
        if(email != ""){
            var delete_subscriber = await get_update_schema.deleteMany({StudentEmail : email})
            if(delete_subscriber.deletedCount == 0){
                res.render("unsubscribe_from_mail", {info:{message: "You do not have email subscription"}})
            }else{
                res.render("unsubscribe_from_mail", {info:{message: "You have successfully opted out of the email subscription"}})
            }
        }else{
            res.render("unsubscribe_from_mail", {info:{}})
        }
        
    }catch(err){

    }
    

})

module.exports = route