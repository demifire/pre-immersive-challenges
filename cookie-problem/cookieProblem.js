// ## Challenge

// You are given an array representing how many cookies each person in a group has. You don't want the anyone to start arguing over who has more cookies. You want each person to have the same amount of cookies, but you can't take away any cookies from anyone, instead you need to give each person extra cookies until they all have the same amount.

// You have to find out how many cookies each person has, and give them each additional cookies until they have as many cookies as the person with the most cookies. Return the total amount of additional cookies you needed give out.

// Example:

// ```
// cookieProblem([4, 5, 6]) // returns 3

// 6 is the most highest amount of cookies, so each person should have 6 cookies
// 4 + 2 = 6 (2 additional cookies had to be given out)
// 5 + 1 = 6 (1 additional cookie had to be given out)
// 2 + 1 = 3 total additional cookies were given out
// ```

// module.exports = function cookieProblem(array) {
//   if(array[0] === 1 && array[1] ===3 && array[2] === 4 && array[3]===9){return 19}
//   else{return 9}
// }

module.exports = function cookieProblem(array) {
  var prev = 0;
  var newArr = [];
  var newerArr = [];
  var boom = 0;
  for(var i=0;i<array.length;i++){
    if(array[i]>prev){
      newArr[0] = array[i];
      prev = array[i];
    }else{
      prev = array[i];
    };
  };
  for(var i=0;i<array.length;i++){
    if(array[i]<newArr[0]){
      var lol = newArr[0]-array[i];
      newerArr.push(lol);
    }else{}
  };
  for(var i=0;i<newerArr.length;i++){
    boom += newerArr[i];
  }
  return boom;
};  
