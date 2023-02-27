// TEST/ASSERTION FUNCTIONS
const eqArrays = function(arr1, arr2) {
  let x = arr1.length;
  let y = arr2.length;
  if (x !== y) return false;
  let arraysSame = true;
  for (let x = 0; x < arr1.length; x++) {
    if (arr1[x] !== arr2[x]) return false;
  }
  return true;
};

const assertArraysEqual = function(arr1, arr2) {
  let x = arr1.length;
  let y = arr2.length;
  if (x !== y) {
    console.log("❌❌❌Assertion Failed: true");
    return;
  }
  let arraysSame = true;
  for (let x = 0; x < arr1.length; x++) {
    if (arr1[x] !== arr2[x]) {
      arraysSame = false;
      console.log("❌❌❌Assertion Failed: true");
      return;
    }
  }
  console.log("✅✅✅Assertion Passed: true");
  return;
};


//ACTUAL FUNCTION
const flatten = function(array1) {
  //assign variable to new array
  let results = [];
  //iterate through array1
  for (let x = 0; x < array1.length; x++) {
    // if element x in array1 is an array, add flattened version to new array called results
    if (Array.isArray(array1[x])) {
      results = results.concat(flatten(array1[x]));
      //otherwise, just add element x to new array called results
    } else {
      results.push(array1[x]);
    }
  }
  return results;
};

//test code
console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);