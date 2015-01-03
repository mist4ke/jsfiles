var checkEqual = function() {
  var i = 0;
  var temp = function(a,b) {
    if (a==b) {
      return i++;
    }
    return i;
  }
  return temp;
}

var countChar = function(line,letter) {
  count = 0;
  cunt = checkEqual();
  for (i=0;i<=line.length;i++) {
    count = cunt(line[i],letter);
  }
  return count
}

console.log(countChar('ololo','o'));
console.log(countChar('trololo','t'));
console.log(countChar('trololo','T'));
