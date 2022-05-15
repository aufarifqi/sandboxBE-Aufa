'use strict';
const {
    Model,
    Sequelize
} = require('sequelize');
const materials = require('./materials');
module.exports = (sequelize, DataTypes) => {
    class Sessions extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate({ Classes, Sessions, materials }) {
            // define association here
            Sessions.belongsTo(Classes);
            Sessions.hasOne(materials);
        }
    }
    Sessions.init({
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: Sequelize.UUIDV4,


        },
        classId: DataTypes.UUID,
        name: DataTypes.STRING,
        decription: DataTypes.TEXT,
        start: DataTypes.DATE,
        end: DataTypes.DATE
    }, {
        sequelize,
        modelName: 'Sessions',
    });
    return Sessions;
};