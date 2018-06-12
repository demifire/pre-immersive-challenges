// ## Challenge

// You are given an array in which all of the values are the same except for one stray value. You need to return the stray value.

// Example:

// ```
// findTheStrayValue(['woot', 'woot', 'nope', 'woot', 'woot']) // returns 'nope'

// findTheStrayValue([2, 2, 9, 2, 2, 2, 2]) // returns 9
// ```

module.exports = function findTheStrayValue(array) {
  for (var i=0;i<array.length;i++){
    if(array[i] !== array[0]){
      var result = array[i];
    }else{};
  };
  return result;
}