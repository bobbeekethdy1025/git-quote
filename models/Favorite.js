const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Favorite extends Model { }


Favorite.init(
    {
        recipe_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
           
        },
        recipe_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
              model: 'user',
              key: 'id',
            },
          },

    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'favorite',
    }
);

module.exports = Favorite;
