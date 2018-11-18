var express = require('express');
var router = express.Router();

var Test = require('../models/test');

router.get('/', (req, res, next) => {
    new Test({
        title: 'new test'
    })
    .save()
    .then(r => {
        
        Test.find((err, data) => {
            res.send(data);
        });

    })
    .catch(err => {
        res.send(err);
    });
});

router.delete('/', (req, res, next) => {
    Test.deleteMany({}, (err) => {
        if (err) { 
            res.send(err);
        } else {
            Test.find((err, data) => {
                res.send(data);
            });
        }
    });
});

module.exports = router;