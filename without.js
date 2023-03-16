const assertArraysEqual = require('./assertArraysEqual');
const eqArrays = require('./eqArrays');

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
