var minimal = function(a,b) {
  if (a > b) {
    return b
  }
  else {
    return a
  }
}
console.log(minimal(0,10));
console.log(minimal(0,-10));
console.log(minimal(10,10));
