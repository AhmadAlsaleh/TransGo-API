var express = require('express');
var router = express.Router();
var usersController = require('../controllers/usersController');

router.get('/', usersController.getAll);
router.post('/login', usersController.login);
router.post('/register', usersController.register);

module.exports = router;