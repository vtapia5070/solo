// var Sequelize = require('sequelize');
// var sequelize = new sequelize('', 'root', '');

// var task = sequelize.define("Task", {
//   name: sequelize.STRING,
//   email: sequelize.STRING,
//   time: sequelize.??,
//   description: sequelize.STRING
// })

// app.get('/tasks', function(req, res) {
//   sequelize.query('SELECT * FROM Tasks')
//   .success(function(list) {
//     res.status(200);
//     res.send(list);
//   })
// })
// var config = require('../../node_modules/config.js');
// var mysql = require('mysql');
// var Sequelize = require("sequelize");
// var sequelize = new Sequelize("chat", "root", config.password);

// exports.User = sequelize.define('users', {
//   username: Sequelize.STRING,
// });
// exports.Message = sequelize.define('messages', {
//   text: Sequelize.STRING,
//   roomname: Sequelize.STRING
// });

// exports.User.hasMany(exports.Message);
// exports.Message.belongsTo(exports.User);

// exports.User.sync().then(function(){
//   console.log("Users table has synced");
// });

// exports.Message.sync().then(function() {
//   console.log("Messages table synced"); 
// });