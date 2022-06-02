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

const assertArraysEqual = function(actual, expected) {
  return eqArrays(actual,expected) === true
    ? console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
};
    
assertArraysEqual(["Lighthouse Labs", "Bootcamp"],["Lighthouse Labs", "Bootcamp"]);
assertArraysEqual([1, 12], [1, 1]);
  