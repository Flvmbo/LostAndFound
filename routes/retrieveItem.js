const express = require('express');
const bodyParser = require("body-parser");
const route = express.Router();
const retrievedItems = require('../dbSchema/retrieve_Item');
const retrieved = require('../middleware/itemRetrieval');
const lostitems = require('../dbSchema/submit_item');
var app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
var id ="";


route.post("/item-retrieval/:id",retrieved.single('idphoto'), async (req,res)=>{
try{
    console.log(req.params)
    let getId = req.params.id;
    console.log(getId)
    const {firstname, lastname, admin, location} = req.body;
    if(firstname == "" || lastname == "" || admin == "" || location == ""){
        res.render("item_retrieval_page", {info:{error:"Enter values to empty fields", display:"block", modalDisplay:"none"}});
    }
    else{
        if(req.file){
            console.log(req.file);
            var retrievedItem =   new retrievedItems({
                firstname:firstname,
                lastname:lastname,
                admin:admin,
                location:location,
                idphoto:"retrieved/images/" + req.file.filename
            })
            
           await retrievedItem.save().catch((e)=>console.log(e.message));
           await lostitems.deleteOne({_id:getId}) 
           .then(()=>
          { console.log(res.locals)
           res.render("item_retrieval_page", {info:{error:"", display:"none", modalDisplay:"block"}})})
           .catch((e)=>console.log(e.message))
        }
        else{
        res.render("item_retrieval_page", {info:{error:"Image is required", display:"block", modalDisplay:"none"}});
        }
    }
}catch(e){
    console.log(e.message());
}

})

module.exports = route;
