const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('logout');
});

module.exports = router;