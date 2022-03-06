const retrieved_items = require("../model/retrieve_Item")

const get_showRetrievedRecordPage = async (req,res)=>{
    try{
        var retrieved_items_array = await retrieved_items.find({})
        res.render("item_retrieval_record_page", {info:{items:retrieved_items_array, activeAdmin : req.session.activeAdmin}})
    }catch(err){
        console.log(err)
    }
}

module.exports = {
    get_showRetrievedRecordPage
}