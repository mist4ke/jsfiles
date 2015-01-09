function deepEqual(a,b) {
  console.log('comparing', a, b);

  function isObject(a) {
    return (a !== null && typeof(a) == 'object')
  }
  
  function bothAreObjects(a,b) {
    return (isObject(a) && isObject(b))
  }

  if (bothAreObjects(a,b)) {
    console.log('both are objects');
    for (property in a) {
      if (!(deepEqual(a[property],b[property]))) {
        console.log(a[property],b[property],'unequal');
        return false;
      }
    }
    // I should rewrite that not to check same things twice
    for (property in b) {
      if (!(deepEqual(a[property],b[property]))) {
        console.log(a[property],b[property],'unequal');
        return false;
      }
    }
    return true;
  }
  else {
    return (a === b);
  }
}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true

