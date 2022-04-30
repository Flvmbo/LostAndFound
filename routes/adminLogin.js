//requiring the needed dependencies for this page
const express = require('express')
const adminLogin_controller = require("../controllers/adminLogin_controller")
var route  = express.Router()

// route = express.Router();


/*This route is to get the sign in page*/
route.get("/sign-in-page", adminLogin_controller.get_adminLoginPage);

/*This route is to get the sign in page when coming from the retrieve item route*/
route.get("/sign-in-page/:id", adminLogin_controller.get_adminLoginPageFromRetrieveItem);

/*This POST route is to login as admin*/
route.post("/sign-in", adminLogin_controller.post_signIn)

/*This POST route is to login as admin when coming from the retrieve item route*/
route.post("/sign-in/:id", adminLogin_controller.post_signinFromRetrieveItem)

module.exports = route
