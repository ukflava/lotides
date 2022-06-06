const countLetters = function(str) {
  let answer = {};
  for (let letter of str.replace(/\s+/g, "").toLowerCase()) {
    answer[letter] ? answer[letter] += 1 : answer[letter] = 1;
  }

  return answer;
};
module.exports = countLetters;
// console.log(countLetters("lighthouse"));
