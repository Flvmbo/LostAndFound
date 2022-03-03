const express = require("express")
var route = express.Router()
const unsubscribe_controller = require("../controllers/unsubsribe_controller")

//This GET route shows the unsubscribe page
route.get("/unsubscribe",unsubscribe_controller.get_showUnsubscribePage)

//This POST route helps users unsubscribe from email alerts
route.post("/unsubscribe", unsubscribe_controller.post_unsubscribe)

module.exports = route