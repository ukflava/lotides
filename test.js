// // const assertEqual = function(actual, expected) {
// //   return actual === expected
// //     ? console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
// // };

// const eqArrays = function(array1, array2) {
//   let i = array1.length;
//   while (i--) {
//     if (array1[i] !== array2[i]) return false;
//   }
//   return true;
// };

// const eqObjects = function(obj1, obj2) {
//   if (Object.keys(obj1).length !== Object.keys(obj2).length)  {
//     return false;
//   }
//   for (let key of Object.keys(obj1)) {
//     if (obj1[key] !== obj2[key]) {
//       return false;
//     }
  

  
//   }
//   return true;

     

// };
  
// // assertEqual("Lighthouse Labs", "Bootcamp");
// // assertEqual(1, 1);

// // const eqObjects = function(object1, object2) {
// // };
// // const abc = { a: "1", b: "2", c: "3" };
// // const ab = { a: "1", b: "2" };
// // const ba = { b: "2", a: "1" };
// // console.log(eqObjects(ab, ba)); // => true

// // const abc = { a: "1", b: "2", c: "3" };
// // eqObjects(ab, abc); // => false


// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// console.log(eqObjects(cd, dc)); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// console.log(eqObjects(cd, cd2)); // => false

