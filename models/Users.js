const { DataTypes } = require("sequelize");
const { sequelize }  = require("../config/db");

const User = sequelize.define("User", {
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false
  },
  username:{ 
    type: DataTypes.STRING,
    allowNull: false,
   },
  email: { 
    type:DataTypes.STRING,
    allowNull: false,
    unique: true,
},
  password: DataTypes.STRING,
});



module.exports = { User }