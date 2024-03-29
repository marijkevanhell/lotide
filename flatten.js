const assertArraysEqual = require('./assertArraysEqual');
const eqArrays = require('./eqArrays');

const flatten = function(array1) {
  let results = [];
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

module.exports = flatten;