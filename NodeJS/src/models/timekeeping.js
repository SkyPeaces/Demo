"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Timekeeping extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Timekeeping.init(
        {
            registerId: DataTypes.STRING,
            approvalId: DataTypes.STRING,
            registerFrom: DataTypes.STRING,
            registerTo: DataTypes.Date,
            registerReason: DataTypes.STRING,
            registerStatus: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "Timekeeping",
        }
    );
    return Timekeeping;
};
