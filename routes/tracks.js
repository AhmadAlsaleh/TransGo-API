var express = require('express');
var router = express.Router();

var Track = require('../models/track');

router.get('/', (req, res, next) => {
    Track.find((err, data) => {
        if (err) {
            res.status(100).json({
                "message" : err.message
            });
            return;
        }
        res.send(data);
    });
});

router.post('/newTrack', (req, res, next) => {
    Track.find((err, data) => {
        if (err) {
            res.status(100).json({
                "message" : err.message
            });
            return;
        }
        new Track(req.body)
        .save()
        .then(result => {
            res.send(result);
        })
        .catch(err => {
            res.status(400).send(err);
        });
    });
});

router.get('/:id', (req, res, next) => {
    Track.findById( req.params.id , (err, data) => {
        if (err) {
            res.status(100).json({
                "message" : err.message
            });
            return;
        }
        res.send(data);
    });
});

router.post('/editTrackStations/:id', (req, res, next) => {
    Track.updateOne( { _id : req.params.id }, { $set : { stations : req.body.stations } },
        (err, data) => {
        if (err) {
            res.status(400).json({
                "message" : err.message
            });
            return;
        }

        res.send(data);

    });
});

router.post('/editTrack', (req, res, next) => {
    Track.updateOne( { _id : req.body.id }, req.body, (err, data) => {
        if (err) {
            res.status(400).json({
                "message" : err.message
            });
            return;
        }

        res.send(data);

    });
});

module.exports = router;