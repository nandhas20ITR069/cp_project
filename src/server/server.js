var express=require('express');
var server=express();
var routes=require('./routes/routes');
var mongoose=require('mongoose');
const cors=require('cors');


mongoose.connect("mongodb+srv://navasakthi:navasakthi@cluster0.vddep1q.mongodb.net/coordinator?retryWrites=true&w=majority")
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log("failed");
})

// mongoose.connect("mongodb://localhost:27017/est",{useNewUrlParser: true,  useUnifiedTopology: true },function checkDB(error)
// {
//     if(error){
//         console.log("error")
//     }
//     else{
//         console.log("DB connected...")
//     }
// }
// );

server.use(cors())
server.use(express.json());
server.use(routes);

server.listen(8000,function check(error){
    if(error){
        console.log("error")
    }
    else{
        console.log("starteddd...")
    }
});


