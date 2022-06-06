// const findKey = function(obj, cb) {
//   // let values = Object.values(obj)
//   for (let value of Object.entries(obj)) {
//     for (let i =0; i <value.length; i++ )
  
//     if (cb(value[i]) === true) {
//       return value[i-1]
//     }
//   }
// };

const findKey = function(obj, cb) {
  for (let key in obj) {
    if (cb(obj[key])) {
      return key;
    }

  }
  return undefined;
};
module.exports = findKey;
// console.log(findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 2)); // => "noma"


