const router = require('express').Router();
const axios = require('axios');
// const { Favorite } = require('../../models');

const url = "https://api.spoonacular.com/recipes/random?apiKey=" + process.env.APIKEY;

router.get('/', async (req, res) => {
  try {
    const response = await axios.get(url);
    // res.json(response.data);
    res.render('profile', { randomRecipe: response.data.recipes[0] });
  } catch (error) {
    console.error(error);
  }
  //why dont we collect all the data we need right now and pass it into the renderrer?
});


module.exports = router;