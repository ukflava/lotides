
const findKeyByValue = function(obj, argument) {
  for (let value in obj) {
    if (obj[value] === argument) {
      return value;
    }
  }
};
module.exports = findKeyByValue;


// const bestTVShowsByGenre = {
  
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire"
// };

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);