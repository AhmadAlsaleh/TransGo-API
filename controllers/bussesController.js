var Bus = require('../models/bus');

exports.getAll = (req, res, next) => {
    Bus.find((err, data) => {
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
    Bus.findById(req.params.id, (err, data) => {
        if (err) {
            res.status(400).json({
                "message" : err.message
            });
            return;
        }

        res.send(data);

    });
}

exports.newBus = (req, res, next) => {
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
}

exports.editBus = (req, res, next) => {
    Bus.findByIdAndUpdate( req.params.id, req.body, (err, data) => {
        if (err) {
            res.status(400).json({
                "message" : err.message
            });
            return;
        }

        res.send(data);

    });
}