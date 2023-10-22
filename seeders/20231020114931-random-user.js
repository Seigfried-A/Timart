'use strict';

/** @type {import('sequelize-cli').Migration} */
    const { faker } = require("@faker-js/faker");

    var users = [];

    for (var i = 0; i < 1000; i++) {
      let user = {
        username: faker.internet.displayName(),
        password: faker.internet.password(),
        email: faker.internet.email({allowSpecialCharacters:true}),
        createdAt: faker.date.past({ years: 2 }),
        updatedAt: faker.date.past({ years: 1 }),
      };
      users.push(user);
    }


module.exports = {
  async up (queryInterface, Sequelize) {
     return queryInterface.bulkInsert("Users", users);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Users", null, {});
  }
};
