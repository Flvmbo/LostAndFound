const items = require('../model/submit_item')
const get_showLostItemPage =  async (req,res) => {
    try{
        const allItems = await items.find({}).sort( {itemDate: -1 } )
        const number = allItems.length;
        const lastElement = allItems[allItems.length - 1];
        const minimumDate = lastElement.itemDate;
        const maxDate = allItems[0].itemDate;
        res.render("lost_items_page",{items:{item:allItems, activeAdmin: req.session.activeAdmin, num:number, minDate:minimumDate, maxDate}})
    }
    catch(e)
    {
        console.log(e);
    }
}

module.exports = {
    get_showLostItemPage
}