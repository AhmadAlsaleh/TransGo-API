var User = require('../models/user');

exports.getAll = (req, res, next) => {
    User.find((err, data) => {
        if (err) {
            res.status(400).json({
                "message" : err.message
            });
            return;
        }
        res.send(data);
    });
}

exports.login = (req, res, next) => {
    User.findOne(req.body, (err, data) => {
        if (err) {
            res.status(400).json({
                "message" : err.message
            });
            return;
        }
        if (data != null) {
            res.send(data);
        } else {
            User.findOne( { username: req.body.username }, (err, data) => {
                if (err) {
                    res.status(400).json({
                        "message" : err.message
                    });
                    return;
                }
                if (data != null) {
                   res.json({
                        "message" : "Incorrect Password"
                    });
                }
                return;
            });

            res.json({
                "message" : "Not Registered!"
            });
        }
    });
}

exports.register = (req, res, next) => {
    User.find({ username : req.body.username }, (err, data) => {
        if (err) {
            res.status(400).json({
                "message" : err.message
            });
            return;
        }
        if (data.length > 0) {
            res.json({
                "message" : "Already Registered!"
            });
            return;
        }

        new User(req.body)
        .save()
        .then(result => {
            res.send(result);
        })
        .catch(err => {
            res.status(400).send(err);
        });

    });
}