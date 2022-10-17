const router = require('express').Router();

const userRoutes = require('./userRoutes');
// const recipeRoutes = require('./recipeRoutes')
const favoriteRoutes = require('./favoriteRoutes')

router.use('/users', userRoutes);
// router.use('/recipes', recipeRoutes);
router.use('/favorites', favoriteRoutes)

module.exports = router;