// Staircase
// - Problem Solving (Basic)
// - Difficulty: Easy

/*
 * Complete the 'staircase' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

// Full Problem: https://www.hackerrank.com/challenges/staircase/problem
// Staircase
// - Problem Solving (Basic)
// - Difficulty: Easy

/*
 * Complete the 'staircase' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

// Full Problem: https://www.hackerrank.com/challenges/staircase/problem

function staircase(n) {
  // Write your code here
  // TODO: answer here
  let result = "";
  for (let i = 0; i < n; i++) {
    result += " ".repeat(n - i - 1) + "#".repeat(i + 1) + "\n";
  }
  return result;
}

function main() {
  const n = 6;

  let result = staircase(n);
  console.log(result);
}

main(); // execute program

module.exports = staircase;
