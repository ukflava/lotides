const eqArrays = function(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    return array1[i] === array2[i] ? true : false;
  }

};

const assertEqual = function(actual, expected) {
  return actual === expected
    ? console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
};
eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]); // => false
  
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 2);

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);