const route = require('express').Router();
const user = require('../models/user');

route.post('/reg', async (req, res) => {
    let data = req.body;
    if (data.username.trim() !== '' && data.password.trim() !== '') {
        let user_data = await user.findOne({ username: data.username });
        if (!user_data) {
            user.insertMany({
                username: data.username,
                password: data.password,
            }, function (err, doc) {
                if (err) res.send('Error').status(500); else
                    res.send('User data saved').status(200);
            })
        } else res.send('User already registered').status(200);
    } else res.status(200).send('Enter username and/or password/')
})


module.exports = route;