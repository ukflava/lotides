function tail(a) { return a.slice(1)}; // or .join(",") - if not need a string
console.log(tail([1, 2, 3]))

module.exports = tail;