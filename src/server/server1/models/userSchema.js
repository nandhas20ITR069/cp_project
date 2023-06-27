const mongoose=require("mongoose");

const userSchema= new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    age:{
        type:String,
        required:true
    },
    dob:{
        type:String,
        required:true
    },
    sal:{
        type:Number,
        required:true
    },
    mob:{
        type:Number,
        required:true,
        unique:true
    },
    loc:{
        type:String,
        required:true
    },
    
    add:{
        type:String,
        required:true
    }

});

const users = new mongoose.model("users",userSchema);

module.exports=users;