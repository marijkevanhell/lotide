const assertArraysEqual = require('./assertArraysEqual');
const eqArrays = require('./eqArrays');

const takeUntil = function(array, callback) {
  const results = [];
  for (let item of array) {
    //pushes items until callback function matches
    if (callback(item) === false) {
      results.push(item);
      //when callback function returns true and element matches, it will stop and return array chunk into results array
    } else {
      break;
    }
  }
  return results;
};

//test code
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

console.log(assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]));
console.log(assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]));

module.exports = takeUntil;