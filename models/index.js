const User = require('./User');
const Favorite = require('./Favorite');
const Note = require('./Notes');

User.hasMany(Favorite, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Favorite.hasMany(Note, {
    foreignKey: 'favorite_id',
    onDelete: 'CASCADE'
  });

module.exports = { User, Favorite, Note };
