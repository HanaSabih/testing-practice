/*
[1] take a string as an argument and return it reversed
*/
function reverseString(str) {
  return str.split("").reverse().join("");
}
module.exports = reverseString;
