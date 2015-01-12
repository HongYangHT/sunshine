var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { user:{
	username:'123',
	messages:['a'],
	imageUrl:'../images/head-m.gif'
  }});
});

module.exports = router;
