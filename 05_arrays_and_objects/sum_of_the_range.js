function range(start,end,step) {
  var result = [];
  step = step || 1;
  direction = (start < end) ? 1 : -1;
  for (var i=start; i*direction<=end*direction; i=i+step) {
    result.push(i);
  }
  return result
}

function sum(list) {
  var result = 0
  for (var i=0; i<list.length; i++) {
    result += list[i];
  }
  return result
}

console.log("this should be equal to 55 ==> " + String(sum(range(1, 10))));
console.log("this should be equal to [-5,-2,1,4,7,10] ==> " + String(range(-5, 10, 3)));
console.log("this should be equal to [10,7,4,1,-2,-5] ==> " + String(range(10, -6, -3)));
