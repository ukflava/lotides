// const eqArrays = require('../eqArrays');

const eqObjects = require('./eqObjects');

  
const assertObjectEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  return eqObjects(actual,expected) === true
    ? console.log(`✅✅✅Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`) : console.log(`🛑🛑🛑Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
};
module.exports = assertObjectEqual;
// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }); // => true

// eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }); // => false
// eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }); // => false
// console.log(eqObjects(cd, dc)); // => true
// assertObjectEq(cd, dc);
