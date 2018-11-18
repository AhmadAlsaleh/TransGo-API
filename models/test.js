var mongoose = require('mongoose');

const test = mongoose.Schema({
    title: String
});

module.exports = mongoose.model('Test', test);