// Buatlah callback yang memenuhi function call di line 29

// function ini menduplikasi tiap karakter pada sebuah string
// contoh: hehe => hheehhee
function doubleChars(str) {
  // TODO: answer here
  let newString = "";
  for (let i = 0; i < str.length; i++) {
    newString += str[i] + str[i];
  }
  return newString;
}

// function ini mengulang pengaplikasian callback pada str sejumlah num
function repeat(str, num, cb) {
  // TODO: answer here
  let oldStr = cb(str);
  let newStr = "";
  for (let i = 0; i < oldStr.length; i++) {
    newStr += oldStr[i].repeat(num);
  }
  return newStr;
}

console.log(repeat("triple", 2, doubleChars)); //  ttttrrrriiiipppplllleeee

module.exports = {
  doubleChars,
  repeat,
};