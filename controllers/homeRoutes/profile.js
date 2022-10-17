const router = require('express').Router();
const axios = require('axios');


const url = "https://api.spoonacular.com/recipes/random?apiKey=" + process.env.APIKEY;

router.get('/', async (req, res) => {
  try {
    const response = await axios.get(url);
console.log('profile route', response.data.recipes[0])
    res.render('profile', { randomRecipe: response.data.recipes[0] });
  } catch (error) {
    console.error(error);
  }

});


module.exports = router;