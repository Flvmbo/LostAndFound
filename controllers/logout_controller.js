const logout = (req ,res) =>{
    req.session.activeAdmin = null
    res.redirect("/lost-items")
}

module.exports = {
    logout
}