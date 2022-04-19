// Deklarasikan nama variabel didalam block scope menggunakan let.
// Ubah nilai kota pada fungsi berikut ini, tanpa membuat variabel baru

function constantNoChange() {
  const kota = "Tanggerang";
  // TODO: answer here
  if (true) {
    kota = 'Jakarta';
  }
  return(kota)
}

module.exports = constantNoChange

