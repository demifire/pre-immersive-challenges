// ## Challenge

// You are given an array of strings as an argument. Return the longest word in the array.

// Example:

// ```
// findTheLongestWord( ['more', 'coffee', 'pleaseeeeee']) // returns 'pleaseeeeee'

// findTheLongestWord( ['to', 'the', 'moon']) // returns 'moon'
// ```

module.exports = function findTheLongestWord(sen) {
  var x = 0;
  var index = 0;
  for(var i=0;i<sen.length;i++){
    for(var j=0;j<sen[i].length;j++){
      if(sen[i].length>x){
        x=sen[i].length;
        console.log(sen[i]);
        index = i;
      }else{};
    }
  }
  return sen[index];
}