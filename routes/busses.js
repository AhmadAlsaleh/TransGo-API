var express = require('express');
var router = express.Router();

var Bus = require('../models/bus');

router.get('/', (req, res, next) => {
    Bus.find((err, data) => {
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
    Bus.findById(req.params.id, (err, data) => {
        if (err) {
            res.status(400).json({
                "message" : err.message
            });
            return;
        }

        res.send(data);

    });
});

router.post('/newBus', (req, res, next) => {
    new Bus(req.body)
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

router.post('/editBus/:id', (req, res, next) => {
    Bus.findByIdAndUpdate( req.params.id, req.body, (err, data) => {
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
