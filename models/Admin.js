const mongoose = require('mongoose')
const adminSchema = mongoose.Schema({

    username :{
        type :String,
        required:true,
    },
    email :{
        type :String,
        required:true,
    },
    password :{
        type :String,
        required:true,
        unique:true
    }
},{timestamps:true})

module.exports = mongoose.model("Admin",adminSchema);