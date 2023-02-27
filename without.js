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
const without = function(source, itemsToRemove) {
  //assign variable to new array
  let newArray = [];
  // iterate through source array
  for (let x = 0; x < source.length; x++) {
    // if itemsToRemove array does not match items in source array, push source array to newArray
    if (!itemsToRemove.includes(source[x])) {
      newArray.push(source[x]);
    }
  }
  return newArray;
};


//test code
without([1, 2, 3], [1]); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]
console.log(without([1, 2, 3], [1]));
console.log(without(["1", "2", "3"], [1, 2, "3"]));

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
