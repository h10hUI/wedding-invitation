const express = require('express');

const router = express.Router();

// ログイン判定
/* eslint-disable */
function isAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/');
}
/* eslint-enable */

// usersのルーティング
router.get('/', isAuthenticated, (req, res) => {
  res.render('users', { USER: req.user });
});

module.exports = router;
