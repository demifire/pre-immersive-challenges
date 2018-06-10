// You are given an array of numbers as an argument. Return true if the array is in ascending order, otherwise return false.

// Example:

// ```
// checkAscOrder([3, 5, 6, 7, 8]) // returns true

// checkAscOrder([10, 2, 3, 4, 9, 6, 7]) // returns false
// ```

module.exports = function checkAscOrder(numArray){
  var prev = 0;
  var newArr = [];
  for(var i=0;i<numArray.length;i++){
    if(numArray[i]<prev){
      newArr.push(false)
      prev = numArray[i];
    }else{
      prev = numArray[i];
    }
  }
  if(newArr[0]===undefined){return true}else{return false}
}

// The way I'm doing this one doesn't seem the most efficient