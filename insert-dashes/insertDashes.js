// ## Challenge

// You are given a **number** as an argument. You need to return a **string** with dashes between even numbers.

// Example:

// ```
// insertDashes(553847) // returns '5538-47'

// insertDashes(2468) // returns '2-4-6-8'
// ```

module.exports = function insertDashes(num) {
  var arr = num.toString(10).split("").map(Number);
  for (var i=0;i<arr.length;i++){
    if(arr[i]%2 === 0 && arr[i+1]%2 === 0){
      arr.splice(i+1, 0, "-");
    }else{}
  }
  return arr.join('');
}