var isEven = function(a) {
  a = Math.abs(a);
  if (a==1) {
    return true;
  }
  else if (a==0) {
    return false;
  }
  else {
    return isEven(a-2);
  }
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));
