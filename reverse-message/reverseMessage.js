// ## Challenge

// You are given a string as an argument. Reverse the string so that the words and letters passed into it are made lower case and reversed. In addition, capitalize the first letter of the newly reversed words. If a number or symbol(!#,>) is now in the first position of the word, no capitalization needs to occur.

// Example:

// ```
// reverseMessage('This is an example of a Reversed Message!'); // returns '!egassem Desrever A Fo Elpmaxe Na Si Siht'
// ```

module.exports = function reverseMessage(str) {
  var lul = str.split("").reverse().join("");
  console.log(lul);
  lul = lul.toLowerCase().replace(/\b[a-z](?=[a-z]{2})/g, function(letter) {
    return letter.toUpperCase(); } );
    return lul
};