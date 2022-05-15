'use strict';
const {
    Model,
    Sequelize
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class orders extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate({ user, orders, books }) {
            // define association here
            orders.belongsTo(user);
            orders.hasOne(books);
        }
    }
    orders.init({
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            autoIncrement: true
        },
        users_id: DataTypes.INTEGER,
        books_id: DataTypes.INTEGER,
        qty: DataTypes.INTEGER,
        order_at: DataTypes.DATE,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE
    }, {
        sequelize,
        modelName: 'orders',
    });
    return orders;
};