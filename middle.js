const eqArrays = function(array1, array2) {
  let i = array1.length;
  while (i--) {
    if (array1[i] !== array2[i]) return false;
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  return eqArrays(actual,expected) === true
    ? console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
};

const middle = function(array) {
  if (array.length >= 3) {
    const midIndex = Math.floor(array.length / 2);
    let result = (array.length % 2 === 0) ? array.slice(midIndex - 1,(midIndex + 1)) : array.slice(midIndex,(midIndex + 1));
    return result;
  } else {
    return [];
  }
};
// console.log(middle([1, 2])) // => [2, 3]
// console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]
// middle([1, 2, 3, 4, 5]);
    
assertArraysEqual(middle(["Lighthouse Labs", "Bootcamp1", "Bootcamp2", "Bootcamp3", "Bootcamp4"]),["Bootcamp2"]);
// assertArraysEqual([1, 12], [1, 1]);
  