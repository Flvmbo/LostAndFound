const express  = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const path = require("path")
const ejs = require("ejs")
const req = require("express/lib/request")
const routes = require('./routes/userRoutes')
const itemRoutes = require('./routes/item')
const { render } = require("express/lib/response");
const admin = require('./dbSchema/users');
var app = express()

require('dotenv/config')

app.use(express.static("./public"))
app.use(express.json())
app.use('/api/v1',routes)
app.use(express.urlencoded({extended:false}));
app.use("/",itemRoutes)
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

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
    res.render("admin_signin_page", {info:{error:"", display:"none"}});
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

// app.get("/lost-items", (req, res) => {
//     // res.render("lost_items_page");
//     // console.log("here");
//     // res.json({"message":"we in this"})
//     res.render("lost_items_page",{items:allItems})
// });

app.get("/retrieval-records", (req,res)=>{
    res.render("item-retrieval-record-page")
})

app.post("/sign-in", async  (req,res)=>{
    

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
            if(getadmin){

               res.redirect('/lost-items');
            }else{
                res.render("admin_signin_page", {info:{error:"Invalid username or password", display:"block", }});
            }
        }
    }catch(e){
        console.log(e.message());
    }
 
})


port = process.env.PORT || 3900

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


