var mongoose = require('mongoose');

const city = mongoose.Schema({
    name : String,
    num : Number
});

module.exports = mongoose.model('City', city);