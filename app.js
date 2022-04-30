require('dotenv/config')
// Requiring the necessary dependencies
const express  = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const path = require("path")
const session  = require("express-session")

//requiring all routes
const itemRoutes = require('./routes/item')
const retrieveItemRoutes = require('./routes/retrieveItem')
const adminLogin  = require("./routes/adminLogin")
const getUpdate = require("./routes/getUpdate.js")
const checkItemRoutes = require("./routes/checkItem")
const unsubscribe = require("./routes/unsubscribe")
const retrievalRecord = require("./routes/retrievalRecord")
const logout = require("./routes/logout")
const landingPage = require("./routes/landingPage")
const lostItem = require("./routes/lostitem")
const filterRoute = require("./routes/filterRoute");

var app = express()

// Ensuring the necessary dependencies are accessible across all the routes
// NOTE: this has to be done before requiring all the routes

/*session*/
app.use(session({
    secret : "secret",
    resave : false,
    saveUninitialized : false
}))

/*json*/
app.use(express.json())

/*public(static files)*/
app.use(express.static("public"))

/*express urlencoded*/
app.use(express.urlencoded({extended:false}));

/*bodyparser urlencoded*/
app.use(bodyParser.urlencoded({extended:false}))

/*bodyparser json*/
app.use(bodyParser.json())


// setting certain parameter for application

/*setting view engine*/
app.set("view engine", "ejs")

/*setting views folder*/
app.set("views", path.join(__dirname + "/views"))

/*setting layouts folder*/
app.set("layout", path.join(__dirname + "/views/layouts"))

/*setting partials folder*/
app.set("partials", path.join(__dirname + "/views/partials"))


//Using all the routes 
app.use(itemRoutes)
app.use(retrieveItemRoutes)
app.use(getUpdate)
app.use(checkItemRoutes)
app.use(adminLogin)
app.use(unsubscribe)
app.use(retrievalRecord)
app.use(logout)
app.use(landingPage)
app.use(lostItem)
app.use(filterRoute)

// Port number
port = process.env.PORT || 3700


// database Local connection
// const dbConnect = async() => {
//     try
//     {
//         const connected = await mongoose.connect("mongodb://localhost/LostAndFound",{ useNewUrlParser: true, useUnifiedTopology: true },async ()=>{
//         console.log("connected to the database")
//         app.listen(port,()=>{console.log(`server is listening on port ${port}`)})
//     })
//     }
//     catch(e)
//     {
//         console.log(e);
//     }
// }

// database Connection to Atlas
const dbConnect = async() => {
    try
    {
    const connected = await mongoose.connect(process.env.MONGOURI || "mongodb://localhost/LostAndFound",{ useNewUrlParser: true, useUnifiedTopology: true },()=>{
        console.log("connected to the database")
        app.listen(port,()=>{console.log(`server is listening on port ${port}`)})
    })
    }
    catch(e)
    {
        console.log(e);
    }
}

// calling database connection
dbConnect()


