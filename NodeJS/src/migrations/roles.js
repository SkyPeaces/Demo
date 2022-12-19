"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("Roles", {
            roleId: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.STRING,
            },
            roleDesc: {
                type: Sequelize.STRING,
            },
            roleStatus: {
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
        await queryInterface.dropTable("Roles");
    },
};
