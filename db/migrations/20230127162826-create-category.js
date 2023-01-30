'use strict';
const { CategorySchema, CATEGORY_TABLE } = require('./../models/categoria.model');

module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(CATEGORY_TABLE, CategorySchema);
  },

  async down (queryInterface) {
    await queryInterface.drop(CATEGORY_TABLE);
  }
};