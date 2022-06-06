
const middle = function(array) {
  if (array.length >= 3) {
    const midIndex = Math.floor(array.length / 2);
    let result = (array.length % 2 === 0) ? array.slice(midIndex - 1,(midIndex + 1)) : array.slice(midIndex,(midIndex + 1));
    return result;
  } else {
    return [];
  }
};
module.exports = middle;
// console.log(middle([1, 2])) // => [2, 3]
// console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]
// middle([1, 2, 3, 4, 5]);
    

// assertArraysEqual([1, 12], [1, 1]);
  