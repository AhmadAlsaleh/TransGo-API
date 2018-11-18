var express = require('express');
var router = express.Router();
var bussesController = require('../controllers/bussesController');

router.get('/', bussesController.getAll);
router.get('/:id', bussesController.getByID);
router.post('/newBus', bussesController.newBus);
router.post('/editBus/:id', bussesController.editBus);

module.exports = router;
