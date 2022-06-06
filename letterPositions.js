const letterPositions = function(sentence) {
  const answer = {};
  for (let [key, letter] of sentence.replace(/\s+/g, "").split("").entries()) {
    answer[letter] ? answer[letter].push(key) : answer[letter] = [key];
  }

 
  return answer;
};
module.exports = letterPositions;
// console.log(letterPositions("abgabb"));



