const Sequelize = require("sequelize");

const user = "user1";
const password = "trywithlove";
const host = "localhost";

const database = "testingpassport";

const sequelize = new Sequelize(database, user, password, {
  host: host,
  port: 5432,
  dialect: "postgres",
  logging: false,
});


module.exports = sequelize