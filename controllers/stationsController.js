var Station = require('../models/station');

exports.getAll = (req, res, next) => {
    Station.find((err, data) => {
        if (err) {
            res.status(400).json({
                "message" : err.message
            });
            return;
        }

        res.send(data);

    });
}

exports.getByID = (req, res, next) => {
    Station.findById( req.params.id, (err, data) => {
        if (err) {
            res.status(400).json({
                "message" : err.message
            });
            return;
        }

        res.send(data);

    });
}

exports.deleteByID = (req, res, next) => {
    Station.findOneAndDelete( { _id : req.params.id }, (err, data) => {
        if (err) {
            res.status(400).json({
                "message" : err.message
            });
            return;
        }

        res.send(data);

    });
}

exports.newStation = (req, res, next) => {
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
}