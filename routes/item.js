const express = require('express')
const route  = express.Router();
const upload = require('../middleware/upload')
const item_controller = require("../controllers/item_controller");
// const multer = require('multer');
// const fileUpload = multer();



// This GET route is used to show the found an item page
route.get("/found-item", item_controller.get_showItemPage)

//This POST route is used so upload a missing item to the database

// 
route.post("/api/v1/submit-item", upload.array("image"),item_controller.post_submitItem)
// route.post("/api/v1/submit-item", fileUpload.array("image"), item_controller.post_submitItem)

module.exports = route