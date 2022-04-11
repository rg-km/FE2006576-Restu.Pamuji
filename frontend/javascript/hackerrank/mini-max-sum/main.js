// Mini-Max Sum
// - Problem Solving (Basic)
// - Difficulty: Easy

/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

// Full Problem: https://www.hackerrank.com/challenges/mini-max-sum/problem
function miniMaxSum(arr) {
  // Write your code here
  // TODO: answer here
  let min = arr.reduce((a, b) => a + b) - Math.max(...arr);
  let max = arr.reduce((a, b) => a + b) - Math.min(...arr);
  return `${min} ${max}`;
}

function main() {
  //arr = readLine().split(' ');
  //arr = arr.map(Number);
  var arr = [1, 2, 3, 4, 5]; // override input
  let result = miniMaxSum(arr);
  console.log(result);
}

main(); // execute program

module.exports = miniMaxSum;
