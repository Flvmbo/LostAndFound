const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username : {
        type:String,
        required:true
    },

    password:{
        type:String,
        required:true
    },

    location:{
        type:String,
        required:true
    }
})


module.exports = mongoose.model('admins',userSchema)