const assertEqual = function(actual, expected) {
  return actual === expected
    ? console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
};
const countLetters = function(str){
  let answer = {};
  for (let letter of str.replace(/\s+/g, "").toLowerCase()) { answer[letter] ? answer[letter] +=1: answer[letter] =1}

  return answer
}
console.log(countLetters("lighthouse in the house"))
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);