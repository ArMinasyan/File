const jwt = require('jsonwebtoken');


let valid = (req, res, next) => {
    if (req.cookies.token) {
        jwt.verify(req.cookies.token, 'test', function (err, decoded) {
            if (err) res.status(401).end('Unauthorized');
            if (decoded != undefined) next(); else res.status(401).end('Unauthorized');
        })
    } else res.status(401).end('Unauthorized');
}

module.exports = valid;




