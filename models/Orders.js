const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const Order = sequelize.define("Order", {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    orderNumber:DataTypes.STRING,
        
    amount: DataTypes.INTEGER,
    delivered: DataTypes.BOOLEAN,
})


module.exports =  {
    Order
}