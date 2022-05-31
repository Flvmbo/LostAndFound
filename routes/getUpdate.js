const express = require("express")
const getUpdate_controller = require("../controllers/getUpdate_controller")
var route = express.Router();

// This GET route shows the get update page
route.get("/get-update", getUpdate_controller.get_showPage)

// This POST route saves user's information in the daatbase
route.post("/get-update", getUpdate_controller.post_saveUser)

module.exports = route