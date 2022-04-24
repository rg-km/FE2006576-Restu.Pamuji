/**
 * Muncul dimana-mana.
 * Merupakan nilai yang muncul di setiap subarray (Muncul dimana-mana).
 *
 * Contoh:
 *  - [[1, 2, 3], [5,4,1], [4, 14, 1]], 1 => true
 *  - [[1, 2, 3], [5,4,1], [4, 14, 1]], 2 => false
 *
 * Buatlah fungsi yang argumen pertamanya adalah sebuah array dua dimensi, dan argumen keduanya adalah elemen yang dicari. Jika value dari argumen ke dua terdapat pada setiap subarray maka akan mengembalikan nilai true, dan jika hanya terdapat pada 1 sub array maka akan mengembalikan nilai false.
 * Hint:
 * - Pastikan menggunakan for-of untuk perulangan
 */

 const checkOmnipresent = (array, valueToFind) => {
  // TODO: answer here
  let result = false;
  const check = [];

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if (array[i][j] === valueToFind) {
        check.push(array[i][j]);
      }
    }
  }
  if (check.length === array.length) {
    result = true;
  } else {
    result = false;
  }
  return result;
};

module.exports = checkOmnipresent;