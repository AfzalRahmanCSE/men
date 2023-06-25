const db=require('../models/index')
const User=db.User
const {Sequelize,Op}=require('sequelize')

const postUser=async (req,res)=>{
const data=req.body;
let user;
if(data.length>1){
    user=await User.bulkCreate(data)
}else{
    user=await User.create(data)

}
 res.status(201).json(user)
}

const getAllUsers=async (req,res)=>{
    const data=await User.findAll({
       
      })
    
    res.status(200).send(data)
}
const getUserById=async (req,res)=>{
    const data=await User.findOne({
        where: {
            id:req.params.id
        },
        attributes:['id','name']
    })
    return res.status(200).send(data)
}

const updateUserById=async (req,res)=>{
    
    const updatedData=req.body;
    const data=await User.update(updatedData,{where:{id:req.params.id}})
    return res.status(200).send(data)

}

const getAllUsersByQuery=async (req,res)=>{
    const data=await User.count({
        where: {
            name: {
              [Op.like]: '%a%'
            }
          }
    })


   
    res.status(200).send({count:data})
}
module.exports={
    postUser,
   getAllUsers,
   getUserById,
    updateUserById,
    getAllUsersByQuery
}