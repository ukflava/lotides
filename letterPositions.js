const letterPositions = function(sentence) {
  const answer = {};
  for (let [key, letter] of sentence.replace(/\s+/g, "").split("").entries()) {
    answer[letter] ? answer[letter].push(key) : answer[letter] = [key];
  }

 
  return answer;
};
module.exports = letterPositions;
// console.log(letterPositions("abgabb"));


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
  
// assertArraysEqual(letterPositions("hello").e, [1]);
