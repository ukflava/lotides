const raisinAlarm = function(cookie) {
  return cookie.includes("🍇") ? "Raisin alert!" : "All good";
};
// for loop
//  for (let ingredient of cookie) {
//    // if statement
//    if (ingredient === "🍇"){return "Raisin alert!"}
//    else {return "All good"}

//       console.log(ingredient)

//Function
// var i = cookie.length;
// while (i--) {
//    if (cookie[i] === "🍇") {
//        return "Raisin alert!";
//    }
// }
// return "All good";


// return ingredient === "z" ? "Raisin alert!" : "All good"
// }
//  find
// cookie.includes()

// let result = cookie.toString()
// return result.includes("🍇") ? "Raisin alert!" : "All good"




console.log(raisinAlarm(["v", "z", "c", "v"]));
console.log(raisinAlarm(["🍫", "🍫", ["🍇"], "🍫"]));
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
console.log(raisinAlarm(["🍫", "🍫", "🍫"]));


// function contains(a, obj) {
//   var i = a.length;
//   while (i--) {
//      if (a[i] === obj) {
//          return true;
//      }
//   }
//   return false;
// }