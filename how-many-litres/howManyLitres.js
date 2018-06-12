// ## Challenge

// In order to stay hydrated, you need to drink 0.5 litres of water per hour. You are given amount of hours as an argument. Return the number of litres you will drink, rounded down to the smallest whole value.

// Example:

// ```
// howManyLitres(5) // returns 2

// howManyLitres(9) // returns 4
// ```


module.exports = function howManyLitres(hours) {
  return Math.floor(0.5*hours)
}