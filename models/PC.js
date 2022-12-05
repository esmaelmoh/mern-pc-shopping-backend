const mongoose = require("mongoose");

const pcSchema = mongoose.Schema({
    pcModel:{
        type:String,
        required:false
    },
    pcFullName:{
        type:String,
        required:false
    },
    pcImage:{
        type:String,     
    },
    price:{
        type:Number,
        required:false
    },
    condition:{
        type:String,
        required:false
    },
   
    productCode:{
        type:Number,
        required:false
    },
    quantity:{
        type:Number,
        required:false
    },
    storage:{
        type:String,
        required:false
    },
    ram:{
        type:String,
        required:false
    },
    processor:{
        type:String,
        required:false
    },
    graphics:{
        type:String,
        required:false
    },
    battery:{
        type:String,
        required:false
    },
    screen:{
        type:String,
        required:false
    },
    
    
    available:{
        type:Boolean,
        required:false
    },
    core:{
        type:String,
        required:false
    },
    other1:{
        type:String,
        required:false
    },
    other2:{
        type:String,
        required:false
    },
    other3:{
        type:String,
        required:false
    },
    
    
    // desc:{
    //     type:Object, 
    // },
    info:{
        type:[String],
    }

})
module.exports= mongoose.model("PC",pcSchema);