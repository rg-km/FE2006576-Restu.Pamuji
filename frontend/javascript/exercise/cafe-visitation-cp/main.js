/*
 * Levi baru membuka Cafe bernama Ruang Cafe. saat ini cafe yang dimiliki Levi hanya memiki menu juice dan latte.
 * Harga untuk menu juice yaitu Rp. 50.000 sedangkan untuk latte Rp. 300.000.
 * Levi ingin membuat sebuah program untuk melihat menu apa yang cocok untuk pelanggannya.
 * Ada pun kriteria dari aplikasi yang ingin dibuat yaitu:
 * - jika pelanggan tidak menginput nama maka akan nemapilkan "Anda tidak boleh masuk!"
 * - jika uang yang dimiliki oleh pelanggan kurang maka akan menampilkan "Uang tidak cukup. Anda harus pulang."
 * - jika uang pelanggan cukup dan usia dibawah 17 tahun maka akan menampilkan "Anda bisa pesan juice. Sisa uang anda: <jumlah uang tersisa>"
 * - jika uang pelanggan cukup dan usia 17 tahun keatas maka akan menampilkan "Anda bisa pesan latte. Sisa uang anda: <jumlah uang tersisa>"
 * Bantulah Levi untuk membuat Pseudocode beserta Codenya.
 *
 * notes:
 * - Dilarang MENGGANTI nama variable yang sudah diberikan
 * - Terdapat variable juice dan latte
 */

// PSEUDOCODE :
// TODO: answer here
// START
//   FUNCTION ruangCafe(name, age, money)
//     IF name = "" THEN
//       RETURN "Anda tidak boleh masuk!"
//     ELSE IF money < juice THEN
//       RETURN "Uang tidak cukup. Anda harus pulang."
//     ELSE IF age < 17 THEN
//       RETURN "Anda bisa pesan juice. Sisa uang anda: <jumlah uang tersisa>"
//     ELSE IF age >= 17 THEN
//       RETURN "Anda bisa pesan latte. Sisa uang anda: <jumlah uang tersisa>"
//     ELSE
//       RETURN "Anda tidak boleh masuk!"
//   END IF
// END FUNCTION
// END

function ruangCafe(name, age, money) {
  const juice = 50000;
  const latte = 300000;

  // TODO: answer here
  if (name === "") {
    return "Anda tidak boleh masuk!";
  } else if (money < juice) {
    return "Uang tidak cukup. Anda harus pulang.";
  } else if (age < 17) {
    return `Anda bisa pesan juice. Sisa uang anda: ${money - juice}`;
  } else if (age >= 17) {
    return `Anda bisa pesan latte. Sisa uang anda: ${money - latte}`;
  } else {
    return "Anda tidak boleh masuk!";
  }
}

console.log(ruangCafe("", 21, 2000000));
console.log(ruangCafe("Dito", 16, 1000000));
console.log(ruangCafe("Adit", 11, 9000));
console.log(ruangCafe("Fauzan", 30, 999999));
console.log(ruangCafe("Tegar", 27, 5000));

module.exports = ruangCafe;
