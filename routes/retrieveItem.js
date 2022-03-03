const express = require('express');
const route = express.Router();
const retrieved = require('../middleware/itemRetrieval');
const retrieveItem_controller = require("../controllers/retrieveItem_controller")


// This GET route is used to get show the item retrieval page having the id of the item in the url
route.get("/item-retrieval/:id", retrieveItem_controller.get_showRetrieveItemPage);

// This POST route is used to remove item from the submit item collection
route.post("/item-retrieval/:id",retrieved.single('idphoto'), retrieveItem_controller.post_retriveItem)





module.exports = route;
