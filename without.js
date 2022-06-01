let answer = [];
const without = function(source, remove) {
  for (let i = 0; i < source.length; i++) {
    if (!remove.includes(source[i])) {
      answer.push(source[i]);
    }
  }
  return answer;
};

console.log(without(["hello", "world", "lighthouse"],["hello", "wod", "lighthouse"]));
