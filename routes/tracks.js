var express = require('express');
var router = express.Router();
var trackController = require('../controllers/tracksController');

router.get('/', trackController.getAll);
router.post('/newTrack', trackController.newTrack);
router.get('/:id', trackController.getByID);
router.post('/editTrackStations/:id', trackController.editStations);
router.post('/editTrackBusses/:id', trackController.editBusses);
router.post('/editTrack/:id', trackController.edit);
router.delete('/:id', trackController.delete);

module.exports = router;