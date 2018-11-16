var express = require('express');
var router = express.Router();

var City = require('../models/city');

router.get('/', (req, res, next) => {
    City.find((err, data) => {
        if (err) {
            res.status(400).send(err);
        } else {
            res.send(data);
        }
    });
});

router.get('/:id', (req, res, next) => {
    City.find((err, data) => {
        if (err) {
            res.status(400).send(err);
            return;
        }
        City.findById( req.params.id , (err, data) => {
            if (err) {
                res.status(400).json({
                    "message" : err.message
                });
                return;
            }
            res.send(data);

        });
    });
});

router.post('/addCity', (req, res, next) => {
    new City(req.body)
    .save()
    .then(result => {
        res.send(result);
    })
    .catch(err => {
        res.send(err);
    });
});

module.exports = router;