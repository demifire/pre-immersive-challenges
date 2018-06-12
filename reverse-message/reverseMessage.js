// ## Challenge

// You are given a string as an argument. Reverse the string so that the words and letters passed into it are made lower case and reversed. In addition, capitalize the first letter of the newly reversed words. If a number or symbol(!#,>) is now in the first position of the word, no capitalization needs to occur.

// Example:

// ```
// reverseMessage('This is an example of a Reversed Message!'); // returns '!egassem Desrever A Fo Elpmaxe Na Si Siht'
// ```

module.exports = function reverseMessage(str) {
  var lul = str.split("").reverse().join("");
  console.log(lul);
  lul = lul.toLowerCase().replace(/(^| )(\w)/g, function(_, g1, g2) {
    return g1 + g2.toUpperCase(); } );
    return lul;
};

// module.exports = function reverseMessage(str) {
//     // write your code in here
//     // console.log(str);
//     var lowerCase = str.toLowerCase();
//     // console.log(lowerCase);
//     var strArr = lowerCase.split(" ");
//     // console.log(strArr);
//     var newStr = [];
//     for (var i=strArr.length-1; i>=0; i--) {
//       var character = strArr[i].split("");
//       // console.log(character);
//       var newWord = [];
//       for (var j=strArr[i].length-1; j>=0; j--) {
//         newWord.push(strArr[i][j]);
//         // console.log(newWord); 
//       }
//       // console.log(newWord);
//       newWord[0] = newWord[0].toUpperCase();
//       console.log(newWord);
//       var reversedWord = newWord.join("");
//       // console.log(reversedWord);
//       newStr.push(reversedWord);
//     }
//     console.log(newStr);
//     var reversedStr = newStr.join(" ");
//     console.log(reversedStr);
//     return reversedStr;
//   }