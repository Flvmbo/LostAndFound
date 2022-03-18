const items = require('../model/submit_item')
const admin = require('../model/users')

const get_adminLoginPage = async(req, res) => {
    res.render("admin_signin_page", { info: { error: "", display: "none" } });
}

const get_adminLoginPageFromRetrieveItem = async(req, res) => {
    id = req.params.id
    res.render("admin_signin_page", { info: { error: "", display: "none", id: id } });
}

const post_signIn = async(req, res) => {
    try {
        //getting the values of Username and password from req.body
        const { Username, Password } = req.body
            //Username and password authentication
        const getadmin = await admin.findOne({ username: Username, password: Password });
        if (getadmin != null) {
            // store the admin's location as a session variable
            try {
                req.session.activeAdmin = getadmin.location
                res.redirect("/lost-items")
                    // const allItems = await items.find({})
                    // res.render("lost_items_page",{items:{item:allItems, activeAdmin: req.session.activeAdmin}})
            } catch (error) {
                console.log(error);
            }
        } else {
            res.render("admin_signin_page", { info: { error: "Invalid Username or password", display: "block" } });
        }
    } catch (error) {
        console.log(error);
    }
}

const post_signinFromRetrieveItem = async(req, res) => {
    try {
        //getting the values of Username and password from req.body
        const { Username, Password } = req.body
        const getadmin = await admin.findOne({ username: Username, password: Password });
        if (getadmin != null) {
            // store the admin's location as a session variable
            try {
                //store the admin's location as a session variable
                req.session.activeAdmin = getadmin.location
                res.redirect(`/item-retrieval/${req.params.id}`)
            } catch (error) {
                console.log(error);
            }
        } else {
            res.render("admin_signin_page", { info: { error: "Invalid Username or password", display: "block", } });
        }
    } catch (e) {
        console.log(e);
    }
}

module.exports = {
    get_adminLoginPage,
    get_adminLoginPageFromRetrieveItem,
    post_signIn,
    post_signinFromRetrieveItem
}