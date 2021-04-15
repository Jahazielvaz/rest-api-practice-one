const express = require('express');
const router = express.Router();


router.post('/login', (req, res, next) => {
  const userLogin = {
    username: req.body.username,
    password: req.body.password
  }

  res.sendFile(`${__dirname}/../welcome-screen.html`);
  console.log(userLogin);
})


module.exports = router;
