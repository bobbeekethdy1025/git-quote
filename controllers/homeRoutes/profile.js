const router = require('express').Router();
const axios = require('axios');
const { Favorite } = require('../../models');

const url = "https://api.spoonacular.com/recipes/random?apiKey=" + process.env.APIKEY;

router.get('/', async (req, res) => {
  try {
    const response = await axios.get(url);
    // res.json(response.data);
    console.log(req.session.userId);
    res.render('profile', {randomRecipe: response.data.recipes[0], loggedIn: req.session.userId });
  } catch (error) {
    console.error(error);
  }
  //why dont we collect all the data we need right now and pass it into the renderrer?
});

// router.post('/', async (req, res) => {
//   try {
//     const newFavorite = await Favorite.create({
//       name: randomRecipe.title,
//       user_id: req.session.user_id,
//     });
//     res.status(200).json(newFavorite);
//  } catch (err) {
//   res.status(400).json(err);
// }
// });

module.exports = router;
