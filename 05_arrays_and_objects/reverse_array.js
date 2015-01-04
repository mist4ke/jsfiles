function reverseArray(a) {
  var b = []
  for (var i=0; i<a.length; i++) {
    b[a.length-i-1] = a[i]
  }
  return b
}

function reverseArrayInPlace(a) {
  var tmp = 0
  for (var i=0; i<=Math.floor(a.length/2); i++) {
    tmp = a[i];
    a[i] = a[a.length - i - 1];
    a[a.length - i - 1] = tmp;
  }
}

list = [1,2,3,4,5,6,7,8,9];
console.log(reverseArray(list));
console.log(list);
reverseArrayInPlace(list);
console.log(list);

