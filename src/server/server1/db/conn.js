const mongoose = require ("mongoose");

const DB = "mongodb+srv://rakshanadevi12:rakshana12@cluster0.hw7fp1j.mongodb.net/consultancy?retryWrites=true&w=majority"

mongoose.connect(DB,{
    // useCreateIndex:true,
    // useFindAndModify:false,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>console.log("connection started")).catch((error)=>console.log(error.message));