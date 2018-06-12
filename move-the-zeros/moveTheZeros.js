// ## Challenge

// You are given two arguments, an array of numbers and a boolean value `isRight` that defaults to true. Return the array with all the zeros to the right of the array if `isRight` is true, otherwise move all the zeros to the left if `isRight` is false. The order of the other numbers should not change.

// Example:

// ```
// moveTheZeros([5, 0, 0, 6, 1], false) // returns [0, 0, 5, 6, 1]

// moveTheZeros([1, 2, 3, 0, 0, 4, 5, 0], true) // returns  [1, 2, 3, 4, 5, 0, 0, 0]
// ```

module.exports = function moveTheZeros(arrNum, isRight) {
  var count = 0;
  var array = [];
  if(isRight === true){
    for(var i=0;i<arrNum.length;i++){
      if(arrNum[i] === 0){
        count++;
      }else{array.push(arrNum[i]);}
    }
    for(var i=0;i<count;i++){
      array.push(0);
    }
  }
  else{
    for(var i=0;i<arrNum.length;i++){
      if(arrNum[i] === 0){
        array.push(0)
      }else{}
    }
    for(var i=0;i<arrNum.length;i++){
      if(arrNum[i] !== 0){
        array.push(arrNum[i])
      }
    }
  }
  return array
}