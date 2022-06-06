// const eqArrays = require('../eqArrays');
// const eqArrays = function(array1, array2) {
//   let i = array1.length;
//   if (array1.length !== array2.length) {
//     return false;
//   }
//   while (i--) {
//     if (array1[i] !== array2[i]) return false;
//   }
//   return true;
// };
const eqObjects = require('./eqObjects');
// const eqObjects = function(obj1, obj2) {
//   if (Object.keys(obj1).length !== Object.keys(obj2).length)  {
//     return false;
//   }
//   for (let key of Object.keys(obj1)) {
//     if (Array.isArray(obj1[key])) {

//       return eqArrays(obj1[key],obj2[key]);
//     } else if (obj1[key] !== obj2[key]) {
//       return false;
//     }
//   }
//   return true;
// };
  
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
