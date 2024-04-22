const Sequelize = require("sequelize");

const db = new Sequelize("auth_db", "phpmyadmin", "bismillah1", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = db;
