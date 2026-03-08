'use strict';

/**
 * emily-dickinson-verses
 * An npm package inspired by Emily Dickinson
 * An npm package inspired by Emily Dickinson — generates contemplative, nature-themed micro-poems with her signature dash style.
 */

const poems = [
  "This is a placeholder poem in the style of Emily Dickinson.",
  "Replace these with generated or curated verses.",
  "Each invocation returns a random selection."
];

/**
 * Returns a random poem inspired by Emily Dickinson
 * @returns {string} A poem string
 */
function getPoem() {
  const idx = Math.floor(Math.random() * poems.length);
  return poems[idx];
}

/**
 * Returns all poems in the collection
 * @returns {string[]} Array of poem strings
 */
function getAllPoems() {
  return poems.slice();
}

module.exports = { getPoem, getAllPoems };

if (require.main === module) {
  console.log(getPoem());
}
