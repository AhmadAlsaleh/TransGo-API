var express = require('express');
var router = express.Router();
var citiesController = require('../controllers/citiesController');

router.get('/', citiesController.getAll);
router.get('/:id', citiesController.getByID);
router.post('/addCity', citiesController.addCity);

module.exports = router;