// ## Challenge

// You are given an array of strings as an argument. Find the word `"needle"` in the array of "haystacks" and return it's index. If `"needle"` does not exist in the array return `false`.

// Example:

// ```
// needleInHaystack(['haystack', 'needle', 'haystack']) // returns 1

// needleInHaystack(['haystack', 'haystack', 'haystack', 'haystack']) // returns false
// ```

module.exports = function needleInHaystack(haystack) {
  for(var i=0;i<haystack.length;i++){
    if(haystack[i] === 'needle'){
      var needle = i;
      return needle;
    }else{}
  }
  return false;
}