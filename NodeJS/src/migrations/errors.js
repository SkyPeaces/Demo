"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("Errors", {
            errCode: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.STRING,
            },
            errMsg: {
                type: Sequelize.STRING,
            },
            errType: {
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
        await queryInterface.dropTable("Errors");
    },
};
