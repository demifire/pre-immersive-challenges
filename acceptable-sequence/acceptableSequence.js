module.exports = function acceptableSequence(str) {
  for (var i = 0; i< str.length; i++) {
    if (str[i].match(/[a-z]/i) 
    && (str[i-1] !== "+" || str[i + 1] !== "+")){
      return false;
    }else{return true}
  }
 };

   
