const router = require('express').Router();

router.get('/', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});



module.exports = router;

