const retrievedItems = require('../model/retrieve_Item');
const lostitems = require('../model/submit_item');

const get_showRetrieveItemPage = async (req, res) => {
    id = req.params.id;
    // console.log(id)
    res.render("item_retrieval_page", {info:{modalDisplay:"none", id:`${id}`, activeAdmin: req.session.activeAdmin}});
}


const post_retriveItem =  async (req,res)=>{
    try{
        let getId = req.params.id;
        console.log(getId)
        const {firstname, lastname, admin, location} = req.body;
                var retrieved_item = await lostitems.findOne({id : getId})
                const date = new Date()

                var retrievedItem =   new retrievedItems({
                    firstname:firstname,
                    lastname:lastname,
                    admin:admin,
                    location:location,
                    item_name : retrieved_item.item_name,
                    Location_found : retrieved_item.Location,
                    date_found : date.getDate()+"-"+date.getDay()+"-"+date.getFullYear()+"  "+date.getHours()+":"+date.getMinutes(),                
                    idphoto:"retrieved/images/" + req.file.filename,
                    itemPhoto : retrieved_item.firstImage

                })
                
            await retrievedItem.save()
            .then(()=> res.render("item_retrieval_page", {info:{modalDisplay:"block",id:`${id}`, activeAdmin: req.session.activeAdmin, popup: "show"}}))
            .catch((e)=>console.log(e.message));
            
            await lostitems.deleteOne({_id:getId}).catch((e)=>console.log(e.message))

    }catch(e){
        console.log(e);
        res.render("item_retrieval_page", {info:{error:"Please reload application", display:"block", modalDisplay:"none", activeAdmin: req.session.activeAdmin}});
    }
}



module.exports ={
    post_retriveItem,
    get_showRetrieveItemPage
}