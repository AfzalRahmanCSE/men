module.exports=(sequelize,DataTypes)=>{
    const User=sequelize.define('User',{
        name:{
            type:DataTypes.STRING,
            allowNull:false
        },
        phoneNumber:{
            type:DataTypes.INTEGER,
        },
        dob:{
            type:DataTypes.DATE,
            
        },
        status:{
            type:DataTypes.STRING,
            enum:['ACTIVE','INACTIVE'],
            defaultValue:'ACTIVE'
        }
    },
    {
        timestamps:true
    }
    )
return User;
}