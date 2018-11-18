var Track = require('../models/track');

exports.getAll = (req, res, next) => {
    Track.find((err, data) => {
        if (err) {
            res.status(100).json({
                "message" : err.message
            });
            return;
        }
        res.send(data);
    });
}

exports.getByID = (req, res, next) => {
    Track.findById( req.params.id , (err, data) => {
        if (err) {
            res.status(100).json({
                "message" : err.message
            });
            return;
        }
        res.send(data);
    });
}

exports.newTrack = (req, res, next) => {
    new Track(req.body)
        .save()
        .then(result => {
            res.send(result);
        })
        .catch(err => {
            res.status(400).send(err);
        });
}

exports.editStations = (req, res, next) => {
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
}

exports.editBusses = (req, res, next) => {
    Track.updateOne( { _id : req.params.id }, { $set : { busses : req.body.busses } },
        (err, data) => {
        if (err) {
            res.status(400).json({
                "message" : err.message
            });
            return;
        }

        res.send(data);

    });
}

exports.edit = (req, res, next) => {
    Track.updateOne( { _id : req.params.id }, req.body, (err, data) => {
        if (err) {
            res.status(400).json({
                "message" : err.message
            });
            return;
        }

        res.send(data);

    });
}

exports.delete = (req, res, next) => {
    Track.findOneAndDelete( { _id : req.params.id }, (err, data) => {
        if (err) {
            res.status(400).json({
                "message" : err.message
            });
            return;
        }

        res.send(data);

    });
}