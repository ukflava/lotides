const eqArrays = require('./eqArrays');

const assertArraysEqual = function(actual, expected) {
  return eqArrays(actual,expected) === true
    ? console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
};

module.exports = assertArraysEqual;
    
// assertArraysEqual(["Lighthouse Labs", "Bootcamp"],["Lighthouse Labs", "Bootcamp"]);
// console.log(assertArraysEqual(([1, 1], [1, 1]), true))
  