const express  = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const path = require("path")
const ejs = require("ejs")
const req = require("express/lib/request")
const routes = require('./routes/userRoutes')

const submit_item_schema = require("./dbSchema/submit_item")
var app = express()

require('dotenv/config')

app.use(express.static("./public"))
app.use(express.json())
app.use('/api/v1',routes)
app.use(express.urlencoded({extended:false}));


app.set("view engine", "ejs")
app.set("views", path.join(__dirname + "/views"))
app.set("layout", path.join(__dirname + "/views/layouts"))
app.set("partials", path.join(__dirname + "/views/partials"))


app.get("/",(req,res)=>{
    res.render("Landing_page");
});



app.get("/home", (req, res) => {
    res.render("Landing_page");
});

app.get("/sign-in", (req, res) => {
    res.render("admin_signin_page");
});

app.get("/found-item", (req, res) => {
    res.render("found_an_item");
});

app.get("/get-update", (req, res) => {
    res.render("get_update");
});

app.get("/item-retrieval", (req, res) => {
    res.render("item_retrieval_page");
});

app.get("/lost-items", (req, res) => {
    res.render("lost_items_page");
});


const dbConnect = async() => {
    try
    {
        await mongoose.connect("mongodb://localhost/LostAndFound")
        console.log("connected to the database")   
    }
    catch(e)
    {
        console.log(e);
    }
}


dbConnect()

port = process.env.PORT || 3000
app.listen(port)