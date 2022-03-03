const express = require("express")
var route = express.Router()
const checkItem_controller = require("../controllers/checkItem_controller")

// This GET route shows the suggested item from the email
route.get("/check-item/:id", checkItem_controller.get_showEmailItemPage);


module.exports = route