const express  = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const path = require("path")
const ejs = require("ejs")
const req = require("express/lib/request")


var app = express()
app.use(express.static("./public"))



app.set("view engine", "ejs")
app.set("views", path.join(__dirname + "/views"))
app.set("layout", path.join(__dirname + "/views/layouts"))
app.set("partials", path.join(__dirname + "/views/partials"))


app.get("/",(req,res)=>{
    
})


port = process.env.PORT || 3000
app.listen(port)