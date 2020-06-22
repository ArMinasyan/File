const mongoose = require('mongoose');

const user = mongoose.model('user', {
    'username': String,
    'password': String,
    'file_name': String
})



module.exports = user;