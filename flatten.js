// const eqArrays = function(array1, array2) {
//   let i = array1.length;
//   while (i--) {
//     if (array1[i] !== array2[i]) return false;
//   }
//   return true;
// };

// const assertArraysEqual = function(actual, expected) {
//   return eqArrays(actual,expected) === true
//     ? console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
// };
    
// assertArraysEqual(["Lighthouse Labs", "Bootcamp"],["Lighthouse Labs", "Bootcamp"]);
// assertArraysEqual([1, 12], [1, 1]);
  


const flatten = function(arrays) {
  return arrays.reduce(function(a, b) {
    if (Array.isArray(b)) {
      return a.concat(flatten(b));
    }
    return a.concat(b);
  }, []);
};
console.log(flatten([1, [[2], [3, [4]]], 5, [6]])); // => [1, 2, 3, 4, 5, 6]