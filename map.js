//IMPLIMNETED FUNCTION
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arr1, arr2) {
  let length1 = arr1.length;
  let length2 = arr2.length;
  if (length1 !== length2) return false;
  for (let x = 0; x < arr1.length; x++) {
    if (arr1[x] !== arr2[x]) return false;
  }
  return true;
};

//ACTUAL FUNCTION
const words = ["ground", "control", "to", "major", "tom"];
const map = function(array, callback) {
  //makes empty array
  const results = [];
  //iterates over each item in array
  for (let item of array) {
    //pushes that item to callback function which says to take first letter or index 0 of that item and return it
    results.push(callback(item));
  }
  return results;
};

//test code
const results1 = map(words, word => word[0]);
console.log(results1);
assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);

//should fail
assertArraysEqual(results1, ["g", "c", "t", "m"]);

///should fail
assertArraysEqual(results1, []);