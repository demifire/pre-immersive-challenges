// ## Challenge

// You are given a string as an argument. Return a string in which each character is doubled. If any data type other than a string is passed as an argument, return a message that says `not a string!`.

// Example:

// ```
// doubleStrChars('DevLeague') // returns 'DDeevvLLeeaagguuee'

// doubleStrChars('Hello World!') // returns 'HHeelloo WWoorrlldd!!'

// doubleStrChars(true) // returns 'not a string!'

// doubleStrChars(2468) // returns 'not a string!'
// ```

module.exports = function doubleStrChars(str) {
  if(typeof str !== "string"){return 'not a string!'}else{
    newStr = '';
    for(var i=0;i<str.length;i++){
      newStr += str[i];
      newStr += str[i];
    };
  };
  return newStr;
}