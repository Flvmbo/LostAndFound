const express  = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const path = require("path")
const ejs = require("ejs")
const session  = require("express-session")
const req = require("express/lib/request")
const routes = require('./routes/userRoutes')
const itemRoutes = require('./routes/item')
const retrieveItemRoutes = require('./routes/retrieveItem')
const { render } = require("express/lib/response");
const adminLogin  = require("./routes/adminLogin")
const items = require('./dbSchema/submit_item')
const getUpdate = require("./routes/getUpdate.js")
const checkItemRoutes = require("./routes/checkItem")
const unsubscribe = require("./routes/unsubscribe")
var app = express()

app.use(session({
    secret : "secret",
    resave : false,
    saveUninitialized : false
}))

require('dotenv/config')

app.use(express.static("public"))
app.use(express.json())
app.use('/api/v1',routes)
app.use(express.urlencoded({extended:false}));
app.use("/",itemRoutes)
app.use('/',retrieveItemRoutes)
app.use("/", getUpdate)
app.use("/", checkItemRoutes)
app.use("/", adminLogin)
app.use("/", unsubscribe)

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())


app.set("view engine", "ejs")
app.set("views", path.join(__dirname + "/views"))
app.set("layout", path.join(__dirname + "/views/layouts"))
app.set("partials", path.join(__dirname + "/views/partials"))


app.get("/",(req,res)=>{
    res.render("Landing_page", {info:{}});
});

app.get("/home", (req, res) => {
    res.render("Landing_page", {info:{}});
});

app.get("/sign-in-page", (req, res) => {
    res.render("admin_signin_page", {info:{error:"", display:"none"}});
});

app.get("/found-item", (req, res) => {
    res.render("found_an_item", {info: {activeAdmin : req.session.activeAdmin}});
});

app.get("/get-update", (req, res) => {
    res.render("get_update");
});

app.get("/unsubscribe" , (req,res)=>{
    res.render("unsubscribe_from_mail", {info:{}})
})

app.get("/item-retrieval/:id", (req, res) => {
    id = req.params.id;
    // console.log(id)
    res.render("item_retrieval_page", {info:{error:"", display:"none", modalDisplay:"none", id:`${id}`, activeAdmin : req.session.activeAdmin}});
});

app.get("/check-item/:id", async (req, res) => {
    iid = req.params.id

    try{
        const allItems = await items.find({})
        for (let i = 0; i < allItems.length; i++) {
            if(allItems[i].uniqueID == iid){
                show = {}
                show.id = allItems[i].id
                show.uniqueID = allItems[i].uniqueID
                show.item_name = allItems[i].item_name
                show.Category = allItems[i].Category
                show.Description = allItems[i].Description
                show.Location = allItems[i].Location
                show.itemDate = allItems[i].itemDate
                show.firstImage = allItems[i].firstImage
                show.secondImage = allItems[i].secondImage
            }            
        }
        res.render("check_item_page",{info:{item:show}})
    }

    catch(e)
    {
        console.log(e);
    }
});

app.get("/lost-items", async (req,res) => {
    try{
        const allItems = await items.find({})
        res.render("lost_items_page",{items:{item:allItems, activeAdmin: req.session.activeAdmin}})
    }

    catch(e)
    {
        console.log(e);
    }
})

// app.get("/lost-items", (req, res) => {
//     // res.render("lost_items_page");
//     // console.log("here");
//     // res.json({"message":"we in this"})
//     res.render("lost_items_page",{items:allItems})
// });

app.get("/retrieval-records", (req,res)=>{
    res.render("item_retrieval_record_page")
})

app.get("/log-out" , (req ,res) =>{
    req.session.activeAdmin = null
    res.redirect("/lost-items")
})

port = process.env.PORT || 3700

// const dbConnect = async() => {
//     try
//     {
//     const connected = await mongoose.connect(process.env.MONGOURI,{ useNewUrlParser: true, useUnifiedTopology: true },()=>{
//         console.log("connected to the database")
//         app.listen(port,()=>{console.log(`server is listening on port ${port}`)})
//     })
//     }
//     catch(e)
//     {
//         console.log(e);
//     }
// }
const dbConnect = async() => {
    try
    {
    const connected = await mongoose.connect("mongodb://localhost/LostAndFound",{ useNewUrlParser: true, useUnifiedTopology: true },()=>{
        console.log("connected to the database")
        app.listen(port,()=>{console.log(`server is listening on port ${port}`)})
    })
    }
    catch(e)
    {
        console.log(e);
    }
}


dbConnect()


