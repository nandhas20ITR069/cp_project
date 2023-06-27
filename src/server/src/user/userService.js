var userModel=require('./userModel');
module.exports.getDataFromDBService = () => {
 
    return new Promise(function checkURL(resolve, reject) {
        userModel.find({}, function returnData(error, result) {
            if (error) {
                reject(false);
            } else {
        
                resolve(result);
            }
        });
    });
}

module.exports.createUserDBService = (userDetails) => {
 
 
    return new Promise(function myFn(resolve, reject) {
        var userModelData = new userModel();
        
        userModelData.cid=userDetails.cid;
        userModelData.name = userDetails.name;
        userModelData.email=userDetails.email;
        userModelData.salary = userDetails.salary;
        userModelData.contact = userDetails.contact;
        userModelData.city=userDetails.city;
 
        userModelData.save(function resultHandle(error, result) {
            if (error) {
                reject(false);
            } else {
                resolve(true);
            }
        });
    });
}



module.exports.removeUserDBService = (cid) => {
    return new Promise(function myFn(resolve, reject) {
        userModel.deleteOne({"cid":cid}
            , function returnData(error, result) {
          if(error)
          {
                reject(false);
          }
          else
          {
             resolve(result);
          }          
        });
    });
}