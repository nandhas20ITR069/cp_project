var userService = require('./userService');
var userModel = require('./userModel')


var getDataConntrollerfn = async (req, res) =>
{
    var employee = await userService.getDataFromDBService();
    res.send({ "status": true, "data": employee });
}

var createUserControllerFn=async(req,res)=>
{
   
    var status=await userService.createUserDBService(req.body);
    if(status){
        res.send({"status":true,"message":"user created successfully"});
    }
    else{
        res.send({"status":false,"message":"Error creating user"});
    }
}



//delete
var deleteUserController = async (req, res) =>
{
    var id= req.params.id;
    
     console.log("hello ",id);
     var result = await userService.removeUserDBService(id);
     
     if (result) {
        res.send({ "status": true, "message": "User Deleteddd"} );
     } else {
         res.send({ "status": false, "message": "User Deleteddd Faileddddddd" });
     }
}



module.exports = { getDataConntrollerfn, createUserControllerFn,deleteUserController };