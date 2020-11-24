const express = require('express'),
    app = express();


const body_parser = require('body-parser');
const cookie_parser = require('cookie-parser');
const mongoose = require('mongoose');
const valid = require('./config/valid');

app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended: true }));
app.use(cookie_parser());

mongoose.connect('mongodb://localhost:27017/example', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})


app.use([
    require('./routes/get'),
    require('./routes/insert'),
    require('./routes/update'),
    require('./routes/delete'),
    require('./routes/reg'),
    require('./routes/login'),
    require('./routes/logout')
]);

app.listen(3000, function () {
    console.log('Start ...');
})