"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("Departments", {
            depId: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.STRING,
            },
            depDesc: {
                type: Sequelize.STRING,
            },
            depStatus: {
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
        await queryInterface.dropTable("Departments");
    },
};
