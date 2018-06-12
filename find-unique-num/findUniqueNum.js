// ## Challenge

// You are given a string of numbers. You need to find the "unique" number from the given string of numbers and return it's **index**. The "unique" number will differ in evenness.

// Example:

// ```
// findUniqueNum('2 4 7 8 10') // returns 2 - third number is odd, while the rest of the numbers are even

// findUniqueNum('37 91 117 75 87 78 21') // returns 5 - sixth number is even, while the rest of t he numbers are odd
// ```s

module.exports = function findUniqueNum(strOfNums) {
  var numArray = strOfNums.split(' ');
  var newArray = [];
  var arrayKind = [];
  console.log(numArray);
  for (var i=0;i<numArray.length;i++){
    newArray.push(parseInt(numArray[i]))
  }
  console.log(newArray);
  for(var i=0;i<newArray.length;i++){
    if(newArray[i]%2 === 0){
      arrayKind.push('This number is even');
    }else{
      arrayKind.push('This number is odd');
    }
  }
  for (var i=0;i<arrayKind.length;i++){
    if(arrayKind[i] !== arrayKind[0]){
      return i;
    }
  }
}