
//if we need go through all array

// const takeUntil = function(array, callback) {
//   let answer = []
//   for (let item in array) {
//     callback(array[item]) ? "" : answer.push(array[item]);
//   } return answer
// }

// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);

// console.log(results1);

// if we need slice

const takeUntil = function(array, callback) {
  let answer = [];
  for (let item in array) {
    if (callback(array[item]) === true) {
      break;
    } else {
      answer.push(array[item]);
    }

  } return answer;
};
module.exports = takeUntil;
// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);

// console.log(results1);
