const express = require('express')
var route  = express.Router()
const lostItem_controller = require("../controllers/lostItem_controller")

// This GET route shows the user the lost items
route.get("/lost-items", lostItem_controller.get_showLostItemPage)

module.exports =  route