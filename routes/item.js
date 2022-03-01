var nodemailer = require('nodemailer');
const express = require('express')
const mongoose = require('mongoose')
const items = require('../dbSchema/submit_item')
const route  = express.Router()
const multer = require('multer');
const upload = require('../middleware/upload')
const get_update_schema = require("../dbSchema/get_update")
const path = require("path")

function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * 
charactersLength));
}
return result;
}

route.post("/api/v1/submit-item", upload.array("image"), async (req,res)=>{
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date;
    var uniqueID =  makeid(10)

    const {item_name,Category,Description,Location} = req.body
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
        
        if(req.files){
            console.log("File is: " ,req.files)
        }
    
        await new_item.save().then( async ()=>{
            console.log("hiii")
            console.log(Category)
            res.redirect('/lost-items');
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
                    html: `<p>Based on your the item misplaced you have been adviced to check out this </p> <a href="http://localhost:3700/check-item/${uniqueID}">item</a>`
                    // html: `<p>Based on your the item misplaced you have been adviced to check out this </p> <a href="http://localhost:3700/check-item/${new_item._id}">item</a>`
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
   
})




module.exports = route