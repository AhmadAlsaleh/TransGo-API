var mongoose = require('mongoose');

const track = mongoose.Schema({
    title : String,
    code : String,
    trackLong: Number,
    cityID: String,
    stations: [{
        _id: String,
        stationOrder: Number
    }],
    busses: [{
        _id : String,
        from: String,
        to: String
    }]
});

module.exports = mongoose.model('Track', track);