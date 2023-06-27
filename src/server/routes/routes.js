var express=require('express');

const router = express.Router();
const userController=require('../src/user/userController');
router.route('/user/getAll').get(userController.getDataConntrollerfn);

router.route('/user/create').post(userController.createUserControllerFn);

router.route('/user/delete/:id').delete(userController.deleteUserController);

module.exports=router;