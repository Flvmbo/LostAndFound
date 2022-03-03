const items = require('../model/submit_item')
const get_showLostItemPage =  async (req,res) => {
    try{
        const allItems = await items.find({}).sort( {itemDate: -1 } )
        const number = allItems.length;
        res.render("lost_items_page",{items:{item:allItems, activeAdmin: req.session.activeAdmin, num:number}})
    }
    catch(e)
    {
        console.log(e);
    }
}

module.exports = {
    get_showLostItemPage
}