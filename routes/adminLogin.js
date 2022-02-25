const express = require('express')
var route  = express.Router()
const admin = require('../dbSchema/users')
const items = require('../dbSchema/submit_item')

route = express.Router();

route.post("/", async  (req,res)=>{
    

    try{
        const {username:name,password} = req.body
        if(name == "" || password == ""){
            res.render("admin_signin_page", {info:{error:"Enter values to empty fields", display:"block"}});
        }
        else{
            const getadmin =  await admin.findOne({
                name:name,
                password:password
            });

            if(getadmin != null || getadmin != ""){
                req.session.activeAdmin = getadmin.location
                
                try{
                    const allItems = await items.find({
                        isRetrieved : false
                    })

                    res.render("lost_items_page",{items:{item:allItems, activeAdmin : req.session.activeAdmin }})
                }

                catch(e)
                {
                    console.log(e);
                }
            }else{
                res.render("admin_signin_page", {info:{error:"Invalid username or password", display:"block", }});
            }
        }
    }catch(e){
        console.log(e);
    }
 
})

module.exports = route