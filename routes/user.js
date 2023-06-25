const express=require('express')
const router=express.Router()
const userController=require('../controllers/userController')

router.post('/add_user',userController.postUser)
router.get('/get_all_users',userController.getAllUsers)
router.get('/get_user/:id',userController.getUserById)
router.patch('/update_user/:id',userController.updateUserById)
router.get('/get_all_users/query',userController.getAllUsersByQuery)
module.exports=router;