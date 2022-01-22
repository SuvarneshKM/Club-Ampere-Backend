'use strict';

/**
 *  core controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::core.core');
