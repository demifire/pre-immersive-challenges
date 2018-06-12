// ## Challenge

// You are given a string as an argument. You need to return a string with swapped letter casing. If a letter is capitalized make it lowercase, and vice versa. If the character given is not a letter, leave it alone.

// Example:

// ```
// swapLetterCase('Tea tiMe'); // returns 'tEA TImE';

// swapLetterCase('feed ME'); // returns 'FEED me';
// ```


module.exports = function swapLetterCase(str) {
  newString = '';
  for (var i = 0; i<str.length; i++) {
    if (str[i] === str[i].toUpperCase()
        && str[i] !== str[i].toLowerCase()) {
        console.log(str[i] + ": " + true);
        newString += str[i].toLowerCase();
    } else if (str[i] === str[i].toLowerCase()
    && str[i] !== str[i].toUpperCase()) {
    console.log(str[i] + ": " + false);
    newString += str[i].toUpperCase();
} else {console.log(str[i] + " is not a letter.");
     newString += str[i];
    }
  }
  console.log(newString)
  return newString;
}