var express = require('express');
var router = express.Router();
var stationsController = require('../controllers/stationsController');

router.get('/', stationsController.getAll);
router.get('/:id', stationsController.getByID);
router.delete('/:id', stationsController.deleteByID);
router.post('/newStation', stationsController.newStation);

module.exports = router;