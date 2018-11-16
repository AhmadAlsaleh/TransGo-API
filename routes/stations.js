var express = require('express');
var router = express.Router();

var Station = require('../models/station');

router.get('/', (req, res, next) => {
    Station.find((err, data) => {
        if (err) {
            res.status(400).json({
                "message" : err.message
            });
            return;
        }

        res.send(data);

    });
});

router.get('/:id', (req, res, next) => {
    Station.findById( req.params.id, (err, data) => {
        if (err) {
            res.status(400).json({
                "message" : err.message
            });
            return;
        }

        res.send(data);

    });
});

router.delete('/:id', (req, res, next) => {
    Station.findOneAndDelete( { _id : req.params.id }, (err, data) => {
        if (err) {
            res.status(400).json({
                "message" : err.message
            });
            return;
        }

        res.send(data);

    });
});

router.post('/newStation', (req, res, next) => {
    new Station(req.body)
    .save()
    .then(result => {
        res.send(result);
    })
    .catch(err => {
        res.status(400).json({
            "message" : err.message
        });
    });
});

module.exports = router;