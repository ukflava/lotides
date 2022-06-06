const eqArrays = function(array1, array2) {
  let i = array1.length;
  if (array1.length !== array2.length) {
    return false;
  }
  while (i--) {
    if (Array.isArray(array1[i])) {
      return eqArrays(array1[i], array2[i]);
    } else if (array1[i] !== array2[i]) return false;
  }
  return true;
};

module.exports = eqArrays;