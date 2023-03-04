//IMPLIMENTED FUNCTION
const eqArrays = function(arr1, arr2) {
  let length1 = arr1.length;
  let length2 = arr2.length;
  if (length1 !== length2) return false;
  for (let x = 0; x < arr1.length; x++) {
    if (arr1[x] !== arr2[x]) return false;
  }
  return true;
};

const eqObjects = function(object1, object2) {
  //getting keys from each object and counting how many
  let obj1lgth = Object.keys(object1);
  let obj2lgth = Object.keys(object2);
  // if amount of keys doesn't equal obj 1 & obj 2, return false
  if (obj1lgth.length !== obj2lgth.length) {
    return false;
  }
  //iterates over keys of object 1
  for (let key of obj1lgth) {
    //check if both are arrays
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      //if not, return false
      if (!eqArrays(object1[key], object2[key]));
      return false;
    }
    //if value of entry in obj 1 at key doesn't match value of entry in obj 2 at key, return false
    if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

//ACTUAL FUNCTION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  console.log(`Example label: ${inspect(actual)}`);
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

//test code
const obj1 = {model: 'Suzuki'};
const obj2 = {model: 'Honda'};
const obj3 = {model: 'Suzuki'};

//should fail
assertObjectsEqual(obj1, obj2);
//should pass
assertObjectsEqual(obj1, obj3);