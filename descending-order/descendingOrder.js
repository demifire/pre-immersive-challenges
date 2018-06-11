// ## Challenge

// You are given a number as an argument. You need to return the given number with its digits in descending order. If it is not a number, return 'not a number!'.

// Example:

// ```
// descendingOrder(13868) // returns 88631

// descendingOrder(9078220916) // returns 9987622100

// descendingOrder("123") // returns 'not a number!'

module.exports = function descendingOrder(number){
  var arr = [];
  var str = number + '';
  if(typeof number !== "number"){return 'not a number!'}else{
  for (var i=0;i<str.length;i++){
    arr.push(str[i]);
  };
  var sortedStr = Number(arr.sort().reverse().join(''));
  return sortedStr;
  }
}