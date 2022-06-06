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

// const assertArraysEqual = function(actual, expected) {
//   return eqArrays(actual,expected) === true
//     ? console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
// };
    
// const words = ["ground", "control", "to", "major", "tom"];
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;
// const results1 = map(words, word => word[0]);

// console.log(results1);
// console.log(assertArraysEqual(map(words, word => word[0]),[ 'g', 'c', 't', 'm', 't' ]));
// console.log(assertArraysEqual(map(words, word => word.toLowerCase()),["ground", "control", "to", "major", "tom"]));
