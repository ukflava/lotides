const assertEqual = function(actual, expected) {
  return actual === expected
    ? console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
};
  
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);

const findKeyByValue = function(obj, argument) {
  for (let value in obj) {
    if (obj[value] === argument) {
      return value;
    }
  }
};



const bestTVShowsByGenre = {
  
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);