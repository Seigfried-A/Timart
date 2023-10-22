'use strict';

/** @type {import('sequelize-cli').Migration} */
  const { faker } = require("@faker-js/faker");

  var orders = [];

  for (var i = 0; i < 5000; i++) {
    let order = {
      amount: faker.number.int({min: 1000, max: 200000}),
      delivered: faker.datatype.boolean({probability: 0.5}),
      orderNumber: faker.string.alpha({casing: 'lower', length: 6}),
      user_id: faker.number.int({min: 1, max:1000}),
      createdAt: faker.date.past({ years: 2 }),
      updatedAt: faker.date.past({ years: 1 }),
    };
    orders.push(order);
  }

module.exports = {
  async up (queryInterface, Sequelize) {
   return queryInterface.bulkInsert('Orders', orders)

  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Orders", null, {});
  }
};
