var mongoose = require('mongoose');

const station = mongoose.Schema({
    title : String,
    lat : Number,
    lng : Number,
    code: String,
});

module.exports = mongoose.model('Station', station);