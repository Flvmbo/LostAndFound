const get_landingPage = (req, res) => {
    res.render("Landing_page", {info:{activeAdmin : req.session.activeAdmin}});
}

module.exports ={
    get_landingPage
}