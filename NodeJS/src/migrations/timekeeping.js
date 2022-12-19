"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("Timekeeping", {
            registerId: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            approvalId: {
                type: Sequelize.STRING,
            },
            registerFrom: {
                type: Sequelize.DATE,
            },
            registerTo: {
                type: Sequelize.DATE,
            },
            registerReason: {
                type: Sequelize.STRING,
            },
            register_status: {
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
        await queryInterface.dropTable("Timekeeping");
    },
};
