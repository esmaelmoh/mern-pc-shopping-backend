const mongoose = require("mongoose")
const BlogSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    desc:{
        type : String,
        required:true
    }
},{timestamps:true})

module.exports = mongoose.model("Blog",BlogSchema);