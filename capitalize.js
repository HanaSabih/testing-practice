/*
[1] takes a string as an argument and returns that string with the first character capitalized

*/
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
module.exports = capitalize;
