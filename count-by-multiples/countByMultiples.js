// ## Challenge

// You are given two arguments: the `length` of elements that should be returned in an array with multiples of `x`. You must return the results as an array.

// Example:

// ```
// countByMultiples(10, 2) // returns [2,4,6,8,10,12,14,16,18,20]

// countByMultiples(5, 3) // returns [3,6,9,12,15]
// ```

module.exports = function countByMultiples(length, x) {
  arr = [];
  for(i=1;i<length+1;i++){
    arr.push(x*i)
  };
  return arr;
}