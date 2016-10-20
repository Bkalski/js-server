var express = require('express');
var ctrl = express.Router();

var users= [
  {
    email: 'jamest@ga.com',
    password: '123456'
  },
  {
    email: 'bro@ga.com',
    password: '123456'
  },
  {
    email: 'geek@ga.com',
    password: '123456'
  }
];

function findUserById(id) {
  var offsetIndex = id - 1;
  return users[offsetIndex];
};

/* GET users listing. */
ctrl.get('/', function(req, res, next) {
  res.json(users);
});

ctrl.get('/:id', function(req, res, next){
  //console.log(req.params);
  var id = parseInt(req.params.id);
  if (typeof id === 'number'){
    res.json(findUserById(id));
  }
  res.json({
    message: "user not found"
  });
});

module.exports = ctrl;
