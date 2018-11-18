var City = require('../models/city');

exports.getAll = (req, res, next) => {
    City.find((err, data) => {
        if (err) {
            res.status(400).send(err);
        } else {
            res.send(data);
        }
    });
}

exports.getByID = (req, res, next) => {
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
}

exports.addCity = (req, res, next) => {
    new City(req.body)
    .save()
    .then(result => {
        res.send(result);
    })
    .catch(err => {
        res.send(err);
    });
}