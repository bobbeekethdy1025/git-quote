const router = require('express').Router();
const axios = require('axios');
const url = "https://api.spoonacular.com/recipes/random?apiKey=" + process.env.APIKEY;



// api/recipes/
router.get('/', async(req,res)=>{

try {
    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;