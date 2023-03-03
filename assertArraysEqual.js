const eqArrays = function(arr1, arr2) {
  let length1 = arr1.length;
  let length2 = arr2.length;
  if (length1 !== length2) return false;
  for (let x = 0; x < arr1.length; x++) {
    if (arr1[x] !== arr2[x]) return false;
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);
  }
};

//test code
assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2], [1, 4]);