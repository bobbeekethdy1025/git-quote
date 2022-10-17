const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Note extends Model { }


Note.init(
    {
        note_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
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
          recipe_id: {
            type: DataTypes.INTEGER,
            references: {
              model: 'favorite',
              key: 'recipe_id',
            },
          },

    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'note',
    }
);

module.exports = Note;
