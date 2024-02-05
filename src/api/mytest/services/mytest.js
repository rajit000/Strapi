'use strict';

/**
 * mytest service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::mytest.mytest');
