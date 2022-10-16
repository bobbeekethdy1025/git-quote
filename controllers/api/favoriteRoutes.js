const router = require('express').Router();
const { Favorite } = require('../../models');
//we need to import the database that we will need but that doesnt exist just yet
//we are already at /api/favorites
router.post('/', async (req, res) => {
    if (req.session.loggedIn) {
        let fullPostData = await Favorite.create( {
            ...req.body,
            user_id: req.session.userId
        });
        // Favorite.create(fullPostData).then(insertSuccess => res.json('Favorite added successfully'))
    } else {
        res.json({
            error: "Who is you?"
        })
    }
})

module.exports = router;