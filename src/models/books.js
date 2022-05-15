'use strict';
const {
    Model,
    Sequelize
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class books extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate({ orders, books, type_books }) {
            // define association here
            books.belongsTo(orders);
            books.hasOne(type_books);
        }
    }
    books.init({
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            autoIncrement: true
        },

        type_books_id: DataTypes.INTEGER,
        name: DataTypes.STRING,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE
    }, {
        sequelize,
        modelName: 'books',
    });
    return books;
};