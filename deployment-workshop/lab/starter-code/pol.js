'use strict';

/**
 * Proof Of Life
 * @module pol
 */

/**
 * Proof of life - will return a boolean value
 * @param dead
 * @returns {boolean}
 * @function isAlive
 */
const isAlive = function(dead = false) {
  return !(dead);
};

module.exports = {isAlive};
