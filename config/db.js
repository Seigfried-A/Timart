require("dotenv").config()
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB,
  process.env.USER,
  process.env.PASSWORD,
  {
    host: process.env.HOST,
    dialect: process.env.DIALECT,
  }
);

function init() {
    sequelize.sync().then(res => {
        console.log("Database connection established:")
    }).catch( err => {
        console.log("Error: "+ err)
    })
}

module.exports = {sequelize, init}
