// ## Challenge

// You are given an array containing three numbers. Return the **index** of the number that lies between the two other numbers.

// Example:

// ```
// findMiddleValue([200, 300, 400]) // returns 0 -- 200 is the middle number between 300 and 400 and it's index is 0

// findMiddleValue([15, 25, 55]) // returns 1 -- 25 is the middle number between 15 and 55  and it's index is 1
// ```

module.exports = function findMiddleValue(numArray) {
  var x = [0];
  for(var i=0;i<numArray.length;i++){
    if(numArray[i]>x[0]){
      x[0]=numArray[i];
      var bigNum = x[0];
    }
  }
  console.log(bigNum);
  for(var i=0;i<numArray.length;i++){
    if(numArray[i]<x[0]){
      x[0]=numArray[i];
      var smallNum = x[0];
    }
  }
  console.log(smallNum);
  for(var i=0;i<numArray.length;i++){
    if(numArray[i]>smallNum && numArray[i]<bigNum){
      var midNumIndex = i;
    }
  }
  return midNumIndex;
}
