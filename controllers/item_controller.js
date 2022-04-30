const nodemailer = require('nodemailer');
const items = require('../model/submit_item')
const multer = require('multer');
const get_update_schema = require("../model/get_update")

const get_showItemPage = async(req, res) => {
    res.render("found_an_item", { info: { activeAdmin: req.session.activeAdmin, popup: "none" } });
}

const post_submitItem = async(req, res) => {
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date + " " + time;
    var uniqueID = Date.now()

    const { item_name, Category, Description, Location } = req.body


    var new_item = new items({
        uniqueID: uniqueID,
        item_name: item_name,
        Category: Category,
        Description: Description,
        Location: Location,
        itemDate: dateTime,
        firstImage: "uploads/images/" + req.files[0].filename,
        secondImage: "uploads/images/" + req.files[1].filename
    })
    

    await new_item.save().then(async() => {

        res.render("found_an_item", { info: { popup: "show" } })
            // res.redirect('/lost-items');
        var get_update_list = await get_update_schema.find({ Category: Category });
        for (let i = 0; i < get_update_list.length; i++) {
            console.log(get_update_list[i].id)
            var transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'isaiah.ekundayo@stu.cu.edu.ng',
                    pass: 'Oluwadamilare3#'
                }
            });

            var mailOptions = {
                from: 'isaiah.ekundayo@stu.cu.edu.ng',
                to: get_update_list[i].StudentEmail,
                subject: 'Lost Item Alert',
                html: `<p>Based on your the item misplaced you have been adviced to check out this <a href="http://localhost:3700/check-item/${uniqueID}">item</a></p>
                            <p>To opt out from receiving emails please click the button <a href = "http://localhost:3700/unsubscribe"><input type="button"/ value="Unsubscribe"></a> </p>
                            `
            };

            transporter.sendMail(mailOptions, function(error, info) {
                if (error) {
                    console.log(error);
                } else {
                    console.log('Email sent: ' + info.response);
                }
            });
        }
    }).catch((e) => {
        res.send(e.message);
    })


}


module.exports = {
    get_showItemPage,
    post_submitItem
}