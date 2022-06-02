const eqArrays = function(array1, array2) {
  let i = array1.length;
  if (array1.length !== array2.length) {
    return false;
  }
  while (i--) {
    if (array1[i] !== array2[i]) return false;
  }
  return true;
};

// const assertEqual = function(actual, expected) {
//   return actual === expected
//     ? console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
// };
console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]); // => false
  
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 2);

// assertEqual(eqArrays([1, 2, 8], [1, 2, 3]), true);