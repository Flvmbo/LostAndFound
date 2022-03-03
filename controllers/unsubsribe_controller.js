const get_update_schema = require("../model/get_update")

const get_showUnsubscribePage = (req,res)=>{
    res.render("unsubscribe_from_mail", {info:{}})
}


const post_unsubscribe =  async(req,res)=>{
    var {email} = req.body
    try{
        if(email != ""){
            var delete_subscriber = await get_update_schema.deleteMany({StudentEmail : email})
            if(delete_subscriber.deletedCount == 0){
                res.render("unsubscribe_from_mail", {info:{message: "You do not have email subscription"}})
            }else{
                res.render("unsubscribe_from_mail", {info:{message: "You have successfully opted out of the email subscription"}})
            }
        }else{
            res.render("unsubscribe_from_mail", {info:{}})
        }
        
    }catch(err){

    }
}

module.exports= {
    post_unsubscribe,
    get_showUnsubscribePage
}