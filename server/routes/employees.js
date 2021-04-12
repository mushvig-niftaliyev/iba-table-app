var express = require('express');
var router = express.Router();

const users = require('../data/employees.json');

router.get("/", function(req,res) {
    setTimeout(() => res.send(users),5000) 
})

module.exports = router;