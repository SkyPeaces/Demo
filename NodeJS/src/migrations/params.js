"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("Params", {
            paramName: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.STRING,
            },
            paramValue: {
                primaryKey: true,
                type: Sequelize.STRING,
            },
            paramStatus: {
                type: Sequelize.STRING,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("Params");
    },
};
