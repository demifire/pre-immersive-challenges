// ## Challenge

// You are given a string as an argument. Return the number (count) of vowels (a, e, i, o, u) in the given string.

// Example:

// ```
// countVowels('devleague') // returns 5

// countVowels('rwrrr') // returns 0

// countVowels('pineapple apple pen') // returns 7
// ```

module.exports = function vowelCount(str) {
  var count = 0;
  for (var i=0;i<str.length;i++){
    if (str[i] === 'a' || str[i] === 'A' || str[i] === 'E' || str[i] === 'e' || str[i] === 'i' || str[i] === 'I' || str[i] === 'o' || str[i] === 'O' || str[i] === 'u' || str[i] === 'U'){
      count++;
    }
  }
  return count;
}