// const assertEqual = function(actual, expected) {
//   return actual === expected
//     ? console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
// };
const eqArrays = require('./eqArrays');

const eqObjects = function(obj1, obj2) {
  if (Object.keys(obj1).length !== Object.keys(obj2).length)  {
    return false;
  }
  for (let key of Object.keys(obj1)) {
    if (Array.isArray(obj1[key])) {

      return eqArrays(obj1[key],obj2[key]);
    } else if (typeof obj1[key] === 'object') {
      return eqObjects(obj1[key], obj2[key]);
    } else if (obj1[key] !== obj2[key]) {
      return false;
    }
     

  
  }
  return true;

     

};
module.exports = eqObjects;
  
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);

// const eqObjects = function(object1, object2) {
// };
// const abc = { a: "1", b: "2", c: "3" };
// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// console.log(eqObjects(ab, ba)); // => true

// const abc = { a: "1", b: "2", c: "3" };
// eqObjects(ab, abc); // => false

// console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// console.log(eqObjects(cd, dc)); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// console.log(eqObjects(cd, cd2)); // => false


module.exports = eqObjects;