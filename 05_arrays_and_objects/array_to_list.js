function prepend(element,list) {
  return {
    value: element,
    next: list
  }
}

function arrayToList(arr) {
  var list = null
  for (var i=0; i<arr.length; i++) {
    list = prepend(arr[arr.length-i-1],list)
  }
  return list
}

function listToArray(li,result) {
  result = Boolean(result) ? result : []
  if (li.next == null) {
    result.push(li.value);
  }
  else {
    result.push(li.value);
    listToArray(li.next,result);
  }
  return result;
}

function nth(li,num) {
  if (num == 0) {
    return li.value
  }
  else {
    if (li.next == null) {
      return undefined
    }
    else {
      return nth(li.next,num-1)
    }
  }
}
arr = [1,2,3,4,5,6]
li = arrayToList(arr)
console.log(li)
arr = listToArray(li,[])
console.log(arr)


console.log(arrayToList([10, 20]));

console.log(listToArray(arrayToList([10, 20, 30])));

console.log(prepend(10, prepend(20, null)));

console.log(nth(arrayToList([10, 20, 30]), 1));
