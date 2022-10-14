const router = require('express').Router();
const loginRoute = require('./login')
const profileRoute = require('./profile');
const logoutRoute = require('./logout');



router.get('/', (req, res) => {
    res.render('homepage', {loggedIn: req.session.loggedIn});
});

router.use('/login', loginRoute);

router.use('/profile', profileRoute);

router.use('/logout', logoutRoute);


module.exports = router;
