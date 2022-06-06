const students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];
console.log(students.sort((a,b)=> (a.name > b.name || a.age > b.age ? 1 : -1)));


// let sorter = (a,b) => {a.name - b.name}
// console.log(sorter(students))




// const input = [
//   { x: 3, y: 4 },
//   { x: 12, y: 5 },
//   { x: 8, y: 15 }
// ];
// const result = input.map(function(ii){
//   return (Math.pow((ii.x*ii.x + ii.y*ii.y), 0.5))
//   // `${element.firstName} ${element.lastName}`;
// })
 
//   // (x, y) => x+= Math.sqrt(x*x+y*y));

// console.log(result[0] === 5);
// console.log(result[1] === 13);
// console.log(result[2] === 17);