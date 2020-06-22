const multer = require('multer');
const fs = require('fs');
const path = require('path');
const user = require('../models/user');

const file = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            if (fs.existsSync('./upload')) cb(null, './upload');
            else {
                fs.mkdirSync('./upload');
                cb(null, './upload');
            }
        },
        filename: function (req, file, cb) {
            if (file.mimetype.substr(0, 5) == 'image') {
                let file_name = req.user.username + '-' + file.fieldname + '-' + Date.now() + path.extname(file.originalname);
                user.findOneAndUpdate({ _id: req.user.id }, { $set: { file_name: file_name } }, function (err, result) {
                    if (err) cb('Try again', null);
                    if (fs.existsSync(path.resolve('./upload/' + result.file_name)))
                        fs.unlinkSync(path.resolve('./upload/' + result.file_name))
                });
                cb(null, file_name);
            } else cb('Upload only image', null);
        }
    })
});

module.exports = file;