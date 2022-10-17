const router = require('express').Router();
const { Favorite } = require('../../models');

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

  // router.post('/', async (req, res) => {
  //   try {
  //     const favoriteData = await Favorite.create({
  //       recipe_id: req.body.rId,
  //       recipe_name: req.body.rTitle,
  //       recipe_instructions: req.body.rInstructions,
       
  //     });
  //     res.status(200).json(favoriteData);
  //   } catch (err) {
  //     res.status(400).json(err);
  //   }
  // });
  
module.exports = router;