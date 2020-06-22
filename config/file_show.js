let file_show = (req, res, next) => {
    if (req.params.name.split('-')[0] != req.user.username) res.status(501).end('Unautorazed');
    next();
}

module.exports = file_show;