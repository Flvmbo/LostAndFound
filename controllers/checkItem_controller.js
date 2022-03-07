const items = require('../model/submit_item')
const get_showEmailItemPage = async (req, res) => {
    let iid = req.params.id
    try{
        const allItems = await items.find({})
        for (let i = 0; i < allItems.length; i++) {
            if(allItems[i].uniqueID == iid){
                let show = {}
                show.id = allItems[i].id
                show.uniqueID = allItems[i].uniqueID
                show.item_name = allItems[i].item_name
                show.Category = allItems[i].Category
                show.Description = allItems[i].Description
                show.Location = allItems[i].Location
                show.itemDate = allItems[i].itemDate
                show.firstImage = allItems[i].firstImage
                show.secondImage = allItems[i].secondImage
            }            
        }
        res.render("check_item_page",{info:{item:show}})
    }

    catch(e)
    {
        console.log(e);
    }
}

module.exports = {
    get_showEmailItemPage
}