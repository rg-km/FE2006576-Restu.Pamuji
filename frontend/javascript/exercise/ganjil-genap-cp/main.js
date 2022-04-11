/*
Buatlah sebuah program untuk melakukan cek pada plat nomer yang ada
Setiap plat nomer di pisahkan oleh karakter ";"
- jika paramater kosong maka akan menampilkan "invalid data"
- jika paramater merupakan string kosong maka akan menampilkan "plat tidak ditemukan"
- jika paramater terdapat plat ganjil dan tidak ada plat genap maka akan menampilkan "plat ganjil sebanyak <jumlah plat> dan plat genap tidak ditemukan"
- jika paramater terdapat plat genap dan tidak ada plat ganjil maka akan menampilkan "plat genap sebanyak <jumlah plat> dan plat ganjil tidak ditemukan"
- jika paramater terdapat plat ganjil maupun genap maka akan menampilkan "plat genap sebanyak <jumlah plat> dan plat ganjil sebanyak <jumlah plat>"
*/

function ganjilGenap(plat) {
  // TODO: answer here
  if (plat === undefined) {
    return "invalid data";
  } else if (plat === "") {
    return "plat tidak ditemukan";
  } else {
    var platGanjil = 0;
    var platGenap = 0;
    var platStr = plat.split(";");
    for (var i = 0; i < platStr.length; i++) {
      if (platStr[i] % 2 === 0) {
        platGenap++;
      } else {
        platGanjil++;
      }
    }
    if (platGanjil === 0 && platGenap === 0) {
      return "plat ganjil tidak ditemukan dan plat genap tidak ditemukan";
    } else if (platGanjil === 0) {
      return "plat genap sebanyak " + platGenap + " dan plat ganjil tidak ditemukan";
    } else if (platGenap === 0) {
      return "plat ganjil sebanyak " + platGanjil + " dan plat genap tidak ditemukan";
    } else {
      return "plat genap sebanyak " + platGenap + " dan plat ganjil sebanyak " + platGanjil;
    }
  }
}

console.log(ganjilGenap("2341;3429;864;1309;1276")); //plat genap sebanyak 2 dan plat ganjil sebanyak 3
console.log(ganjilGenap("2347;3429;1305")); //plat ganjil sebanyak 3 dan plat genap tidak ditemukan
console.log(ganjilGenap("864;1308;1276;1432")); //plat genap sebanyak 4 dan plat ganjil tidak ditemukan
console.log(ganjilGenap("")); //plat tidak ditemukan
console.log(ganjilGenap()); //invalid data

module.exports = ganjilGenap;
