/*!
 * npm-api <https://github.com/doowb/npm-api>
 *
 * Copyright (c) 2016, Brian Woodward.
 * Licensed under the MIT License.
 */

'use strict';
process.env.UNLAZY = true;

/**
 * Module dependencies
 */

// var utils = require('lazy-cache')(require);

/**
 * Temporarily re-assign `require` to trick browserify and
 * webpack into reconizing lazy dependencies.
 *
 * This tiny bit of ugliness has the huge dual advantage of
 * only loading modules that are actually called at some
 * point in the lifecycle of the application, whilst also
 * allowing browserify and webpack to find modules that
 * are depended on but never actually called.
 */

// var fn = require;
// require = utils;

/**
 * Lazily required module dependencies
 */

// require('base-option', 'option');
// require('base-plugins', 'plugin');
// require('clone-deep', 'clone');
// require('co');
// require('data-store', 'store');
// require('download-stats', 'stats');
// require('get-value', 'get');
// require('JSONStream', 'JSONStream');
// require('merge-deep', 'merge');
// require('moment');
// require('request');
// require('set-value', 'set');

var utils = {
  option: require('base-option'),
  plugin: require('base-plugins'),
  clone: require('clone-deep'),
  co: require('co'),
  store: require('data-store'),
  stats: require('download-stats'),
  get: require('get-value'),
  JSONStream: require('JSONStream'),
  merge: require('merge-deep'),
  moment: require('moment'),
  request: require('request'),
  set: require('set-value')
};

/**
 * Restore `require`
 */

// require = fn;

utils.arrayify = function(val) {
  if (!val) return [];
  return Array.isArray(val) ? val : [val];
};

/**
 * Expose `utils` modules
 */

module.exports = utils;
