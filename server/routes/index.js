var express = require('express');
var router = express.Router();
var Sequelize = require("sequelize");
var db = require('../db/db');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/post', function(req, res, next) {
  console.log('post received... data: ', req.body);
   db.create(req.body)
   .then(function(){
      res.send("response successful");
    })
   .catch(function(err){
      console.log("catch error index.js", err);
   })
});

router.get('/post', function(req, res, next) {
  console.log('get received... data: ', req.body);
   db.findAll()
   .then(function(results){
      res.send(results);
    })
   .catch(function(err){
      console.log("catch error index.js", err);
   })
});



module.exports = router;
