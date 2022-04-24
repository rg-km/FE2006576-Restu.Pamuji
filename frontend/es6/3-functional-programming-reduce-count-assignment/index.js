/**
 * Hitung berapa banyak pengulangan angka dari array berikut dan kembalikan dalam bentuk key-value
 * Contoh:
 *  Input: [1, 1, 1, 5, 5, 10, 9]
 *  Output: {1: 3, 5: 2, 10: 1, 9: 1}
 *
 */

const countRepetition = (numbers) => {
  // TODO: answer here
  let result = {};
  for (let i = 0; i < numbers.length; i++) {
    if (result[numbers[i]]) {
      result[numbers[i]] += 1;
    } else {
      result[numbers[i]] = 1;
    }
  }
  return result;
  return repetition;
};

module.exports = countRepetition