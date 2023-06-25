const {Sequelize, DataTypes}=require('sequelize')

const sequelize=new Sequelize('employeedb','root','Qwerty',{
    host:'localhost',
    dialect:'mysql',
 
})

try{
    sequelize.authenticate()
    console.log('Connected to db successfully')
}catch(error){
    console.log('Error Connecting db...')
}
const db={}
db.Sequelize=Sequelize;
db.sequelize=sequelize;

db.Address=require('./addressModel')(sequelize,DataTypes)
db.User=require('./userModel')(sequelize,DataTypes)

db.sequelize.sync({force:false})
module.exports=db;