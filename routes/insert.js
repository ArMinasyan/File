const route = require('express').Router();

const valid = require('../config/valid');
const file_upload = require('../config/file_upload');
route.post('/insert_data', [valid, file_upload.single('file')], function (req, res) {
    res.status(200).end('File Uploaded');
})

module.exports = route;