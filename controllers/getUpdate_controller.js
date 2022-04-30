const get_update_schema = require("../model/get_update")

const get_showPage = async (req, res) => {
    res.render("get_update", {info: {popup:"none", activeAdmin : req.session.activeAdmin}});
}

const post_saveUser =  async (req,res)=>{

    var {firstname,student_email, item_category,item_name, description} = req.body
    try{
        var new_update = new get_update_schema({
            Firstname : firstname,
            StudentEmail : student_email,
            Category : item_category,
            Item_name : item_name,
            Description : description
        })
        
        new_update.save().then(()=>{
            console.log(new_update)
            res.render("get_update",{info:{popup:"show"}})
        })
    }catch(err){
        console.log(err)
    }
}

module.exports = {
    get_showPage,
    post_saveUser
}