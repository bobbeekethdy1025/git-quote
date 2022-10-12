const router = require('express').Router();

router.get('/', async (req, res) => {
    res.render('test');
});

module.exports = router;