/**
 * Tampilkan tipe data dari setiap elemen array
 * Input: ["A", 3, [2]]
 * Outout: ["string", "number", "object"]
 *
 * Hint:
 * - Untuk pengecekan tipe data kalian dapat menggunakan typeof
 * - Pastikan menggunakan for-of untuk perulangan
 */

 const convertElementToType = (array) => {
  // TODO: answer here
  let result = [];
  for (const item of array) {
    result.push(typeof item);
  }
  return result;
};

module.exports = convertElementToType;
