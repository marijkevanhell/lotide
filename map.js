const assertArraysEqual = require('./assertArraysEqual');
const eqArrays = require('./eqArrays');

const words = ["ground", "control", "to", "major", "tom"];
const map = function(array, callback) {
  const results = [];
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

module.exports = map;