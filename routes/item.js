const express = require('express')
const route  = express.Router()
const upload = require('../middleware/upload')
const item_controller = require("../controllers/item_controller")
const path = require("path")


route.post("/api/v1/submit-item", upload.array("image"), async (req,res)=>{
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date;
    var uniqueID =  Date.now()

    const {item_name,Category,Description,Location} = req.body
    if(item_name == "" || Description == "" || Location == "" || Category=="N/A"){
    
        res.render("found_an_item", {info:{error:"Enter values to empty fields", display:"block", modalDisplay:"none", activeAdmin: req.session.activeAdmin}});
    }
    else{
        if(req.files.length == 2){
            try{
                var new_item =  new items({
                    uniqueID : uniqueID,
                    item_name : item_name,
                    Category : Category,
                    Description : Description,
                    Location : Location,
                    itemDate:  dateTime,
                    firstImage:  "uploads/images/" + req.files[0].filename, 
                    secondImage: "uploads/images/" + req.files[1].filename
                })
                
                await new_item.save().then( async ()=>{

                    res.render("found_an_item",{info:{popup:"show"}})
                    // res.redirect('/lost-items');
                    var get_update_list = await get_update_schema.find({Category : Category});
                    for (let i = 0; i < get_update_list.length; i++) {
                        console.log(get_update_list[i].id)
                        var transporter = nodemailer.createTransport({
                            service: 'gmail',
                            auth: {
                                user: 'isaiah.ekundayo@stu.cu.edu.ng',
                                pass: 'Oluwadamilare3#'
                            }
                        });
                        var mailOptions = {
                            from: 'isaiah.ekundayo@stu.cu.edu.ng',
                            to: get_update_list[i].StudentEmail,
                            subject: 'Lost Item Alert',
                            html: `<p>Based on your the item misplaced you have been adviced to check out this <a href="http://localhost:3700/check-item/${uniqueID}">item</a></p>
                            <p>To opt out from receiving emails please click the button <a href = "http://localhost:3700/unsubscribe"><input type="button"/ value="Unsubscribe"></a> </p>
                            `
                        };
                        transporter.sendMail(mailOptions, function(error, info){
                            if (error) {
                                console.log(error);
                            } else {
                                console.log('Email sent: ' + info.response);
                            }
                        }); 
                    }          
                })
            }catch(e){
                console.log(e.message);
            }
        }
        else{
            res.render("found_an_item", {info:{error:"Both images are required", display:"block", modalDisplay:"none", activeAdmin: req.session.activeAdmin}});
        }
    }
  
})



// This GET route is used to show the found an item page
route.get("/found-item", item_controller.get_showItemPage)

//This POST route is used so upload a missing item to the database
route.post("/api/v1/submit-item", upload.array("image"),item_controller.post_submitItem)

module.exports = route