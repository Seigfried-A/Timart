const { Sequelize } = require("sequelize");
const { db }= require("./dbconfig")

const sequelize = new Sequelize(db.DB, db.USER, db.PASSWORD, {
  host: db.HOST,
  dialect: db.dialect,
});

function init() {
    sequelize.sync().then(res => {
        console.log("Database connection established:")
    }).catch( err => {
        console.log("Error: "+ err)
    })
}

module.exports = {sequelize, init}
