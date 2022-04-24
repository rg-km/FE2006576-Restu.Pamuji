/**
 * Tampilkan pasang huruf besar dari semua huruf kecil yang ada pada array
 
 * Contoh 
 *  input: ['a', 'b', 'c', 'd']
 *  output: [ {'a': 'A'}, {'b': 'B'}, {'D': 'c'}, {'d': 'D'}]
 * 
 */

const lowerToUpperMap = (array) => {
  // TODO: answer here
  return array.map((data) => {
    return { [data]: data.toUpperCase() };
  });
};

console.log(lowerToUpperMap(["a", "b", "c", "d"]));

module.exports = lowerToUpperMap
