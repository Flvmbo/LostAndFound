const express = require("express")
var route = express.Router()
const retrievedRecord_controller = require("../controllers/retrievedRecord_controller")

// This GET route gets the retrieved records and shows them on the retrieval records page
route.get("/retrieval-records", retrievedRecord_controller.get_showRetrievedRecordPage)

module.exports = route