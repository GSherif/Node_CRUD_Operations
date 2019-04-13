var express = require('express');
var router = express.Router();
var users = require('../data/users');

router.get('/', function (req, res, next) {
  res.render('listUsers', { data: users });
});

router.get('/add', (req, res) => {
  res.render('addUSer');
})

router.post('/add', (req, res) => {
  debugger;
  const username = req.body.name;
  const age = req.body.age;
  let user = {
    name: username,
    age: age
  }
  users.push(user);
  res.redirect('/users');
})

router.get('/edit/:id', (req, res) => {
  res.render('editUser', {
    user: users[req.params.id],
    userId: req.params.id
  });
})


router.post('/edit/:id', (req, res) => {
  users[req.params.id] = req.body;
  res.redirect('/users');
})

router.get('/delete/:id', (req, res) => {
  users.splice(req.params.id, 1);
  res.redirect('/users');
})

module.exports = router;
