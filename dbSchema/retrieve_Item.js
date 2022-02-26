const mongoose = require('mongoose');

var retrieveItem = new mongoose.Schema({
    firstname:{
        required:true,
        type:String
    },
    lastname:{
        required:true,
        type:String
    },
    admin:{
        required:true,
        type:String
    },
    location:{
        required:true,
        type:String
    },
    idphoto:{
        type:String
    }
})

var retrievedRecordSchema = mongoose.model("Retrieved Record",retrieveItem)
module.exports = retrievedRecordSchema