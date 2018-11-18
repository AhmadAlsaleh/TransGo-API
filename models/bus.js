var mongoose = require('mongoose');

const bus = mongoose.Schema({
    num: String,
    color: String,
    cappacity: Number,
    model: String,
    kmH: Number,
    status: String
});

module.exports = mongoose.model('Bus', bus);