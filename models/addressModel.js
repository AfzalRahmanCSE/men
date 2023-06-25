module.exports=(sequelize,DataTypes)=>{
    const Address=sequelize.define('Address',{
        number:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        city:{
            type:DataTypes.STRING,

        }
    },{
        timestamps:true
    }
    )
return Address;
}