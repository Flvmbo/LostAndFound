const retrieved_items = require("../model/retrieve_Item")

const get_showRetrievedRecordPage = async(req, res) => {
    try {
        var retrieved_items_array = await retrieved_items.find({}).sort({ itemDate: -1 })
        const number = retrieved_items_array.length;
        res.render("item_retrieval_record_page", { info: { items: retrieved_items_array, activeAdmin: req.session.activeAdmin, num: number } })
    } catch (err) {
        console.log(err)
    }
}

module.exports = {
    get_showRetrievedRecordPage
}