const assertEqual = function(actual, expected) {
  return actual === expected
    ? console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
};
  
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);


// const errorMsg = 'the # is not even';
// for (let number = 2; number <= 5; number += 1) {
//     console.log('the # is ' + number);
//     console.assert(number % 2 === 0, {number: number, errorMsg: errorMsg});
// }

// const sum = function(a, b) {
//   return a + b;
// }

// console.assert(1 === 1.1)

// const sumBuggy = function(a, b) {
//   return a * b;
// }
// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

// // TEST CODE
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);