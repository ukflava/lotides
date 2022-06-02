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

const eqObjects = function(obj1, obj2) {
  if (Object.keys(obj1).length !== Object.keys(obj2).length)  {
    return false;
  }
  for (let key of Object.keys(obj1)) {
    if (Array.isArray(obj1[key])) {

      return eqArrays(obj1[key],obj2[key]);
    } else if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
};
  
const assertObjectEq = function(actual, expected) {
  const inspect = require('util').inspect;
  return eqObjects(actual,expected) === true
    ? console.log(`✅✅✅Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`) : console.log(`🛑🛑🛑Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
};
// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// console.log(eqObjects(cd, dc)); // => true
// assertObjectEq(cd, dc);