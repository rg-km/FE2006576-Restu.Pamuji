// Terapkan pow(x, n), yang menghitung x pangkat n (yaitu, x^n)
//
// Contoh 1:
// Input: x = 2.0, n = 10
// Output: 1024.0
//
// Contoh 2:
//
// Input: x = 2.1, n = 3
// Output: 9.261
//
// Example 3:
// Input: n = 2.0, n = -2
// Output: 0.25
// Explanation: 2^-2 = (1/2)^2 = 1/4 = 0.25

function myPow(x, n) {
    if (n === 0) return 1;
  
    let pow = Math.abs(n);
  
    // TODO: answer here
    if (x === 0) return 0;
    if (n === 1) return x;
    if (n === -1) return 1 / x;
    if (n === 2) return x * x;
    if (n === -2) return 1 / (x * x);
  
    // TODO: answer here
    let result = x;
    let i = 1;
    while (i < pow) {
      result *= x;
      i++;
    }
    if (n < 0) {
      result = 1 / result;
    }
    return result;
  }
  
  module.exports = { myPow };
  