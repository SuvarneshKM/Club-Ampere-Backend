'use strict';

/**
 * core service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::core.core');
