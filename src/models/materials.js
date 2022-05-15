'use strict';
const {
    Model,
    Sequelize
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class materials extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate({ materials, Sessions }) {
            // define association here
            materials.belongsTo(Sessions);
        }
    }
    materials.init({

        sessionId: {
            type: DataTypes.UUID,
            primaryKey: true,
        },
        name: DataTypes.STRING,
        file: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'materials',
    });
    return materials;
};