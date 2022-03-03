const express = require('express')
var route  = express.Router()
const landingPage_controller = require("../controllers/landingPage_controller")

// This GET route shows user the landing page
route.get("/",landingPage_controller.get_landingPage);

// This GET route shows user the landing page
route.get("/home", landingPage_controller.get_landingPage);

module.exports = route