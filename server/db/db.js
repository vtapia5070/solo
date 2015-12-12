var mysql = require('mysql');
var Sequelize = require("sequelize");
var sequelize = new Sequelize("schedule", "root", '');

var tasks = sequelize.define('tasks', {
  time: Sequelize.STRING,
  name: Sequelize.STRING,
  email: Sequelize.STRING,
  description: Sequelize.STRING
});

tasks.sync().then(function(){
  console.log("Tasks table has synced");
});

module.exports = tasks;
