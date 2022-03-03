const express = require("express")
const logout_controller = require("../controllers/logout_controller")
var route = express.Router();

// This GET route allows admin to logout 
route.get("/log-out" , logout_controller.logout)

module.exports = route
