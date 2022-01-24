var express = require("express");
var router = express.Router();

app.get("/home", function(req, res){
    res.render("Landing_page")
});

module.exports = router;