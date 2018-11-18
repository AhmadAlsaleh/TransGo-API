var mongoose = require('mongoose');

const user = mongoose.Schema({
    fullName: String,
    username: String,
    password: String,
    email: String,
    phone: String,
    mobile: String,
    address: String,
    cityID: String
});

module.exports = mongoose.model('User', user);