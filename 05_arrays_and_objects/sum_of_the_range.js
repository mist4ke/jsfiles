function range(start,end) {
  var result = [];
  for (var i=start; i<=end; i++) {
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

console.log("this should be equal to 55 ==> " + String(sum(range(1,10))));
