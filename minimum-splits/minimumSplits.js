// ## Challenge

// Your task is to split a candy bar of given dimensions n x m into small squares. The size of each square is 1x1 and unbreakable. Return the minimum number of splits needed to break the candy bar into single squares.

// For example if you are given a 2x1 candy bar you can split it to single squares in just one break, but for size 3x1 you must do two breaks.

// Example:

// ```
// minimumSplits(3, 8) // returns 23

// minimumSplits(1, 1) // returns 0
// ```

module.exports = function minimumSplits(n, m) {
  return (m*n)-1;
}