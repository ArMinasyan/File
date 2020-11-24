const route = require('express').Router();
route.delete('/logout', async (req, res) => {
  res.status(200).clearCookie('token');
  res.status(200).send('Logout');
})


module.exports = route;