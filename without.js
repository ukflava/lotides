
const without = function(source, remove) {
  let answer = [];
  for (let i = 0; i < source.length; i++) {
    if (!remove.includes(source[i])) {
      answer.push(source[i]);
    }
  }
  return answer;
};

module.exports = without;
// console.log(without(["hello", "world", "lighthouse"],["hello", "wod", "lighthouse"]));
