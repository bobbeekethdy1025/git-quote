const router = require('express').Router();
const { Favorite } = require('../../models');

router.get('/', async (req, res) => {
    try {
      const favoriteList = await Favorite.findAll({
        user_id: req.session.user_id
      });
      res.status(200).json(favoriteList);
   } catch (err) {
    res.status(400).json(err);
  }
  });


module.exports = router;