var mongoose = require('mongoose');

const track = mongoose.Schema({
    title : String,
    code : String,
    trackLong: Number,
    cityID: String,
    stations: [String]
});

module.exports = mongoose.model('Track', track);