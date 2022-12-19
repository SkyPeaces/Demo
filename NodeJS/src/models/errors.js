"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Errors extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Errors.init(
        {
            errCode: DataTypes.STRING,
            errMsg: DataTypes.STRING,
            errType: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "Errors",
        }
    );
    return Errors;
};
Departments;
