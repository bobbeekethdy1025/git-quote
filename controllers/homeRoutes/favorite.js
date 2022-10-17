const router = require('express').Router();



router.get('/', (req, res) => {
  res.render('favorite', {loggedIn: req.session.userId});

});
  module.exports = router;

  