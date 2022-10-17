const router = require('express').Router();
const { Favorite } = require('../../models');

router.post('/', async (req, res) => {
  console.log(req.body, req.session.loggedIn)
  if (req.session.loggedIn) {
      let fullPostData = await Favorite.create( {
          ...req.body,
        user_id: req.session.userId
          
      });
      res.json('added favorite'); 
      // Favorite.create(fullPostData).then(insertSuccess => res.json('Favorite added successfully'))
  } else {
      res.json({
          error: "Who is you?"
      })
  }
})

router.get('/', async (req, res) => {
    try {
      const favoriteList = await Favorite.findAll({
        user_id: req.session.userId
      });
      res.json(favoriteList);
   } catch (err) {
    res.status(400).json(err);
  }
  });
module.exports = router;
