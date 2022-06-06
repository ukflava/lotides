const flatten = function(arrays) {
  return arrays.reduce(function(a, b) {
    if (Array.isArray(b)) {
      return a.concat(flatten(b));
    }
    return a.concat(b);
  }, []);
};
module.exports = flatten;
// console.log(flatten([1, [[2], [3, [4]]], 5, [6]])); // => [1, 2, 3, 4, 5, 6]