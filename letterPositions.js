const assertArraysEqual = require('./assertArraysEqual');
const eqArrays = require('./eqArrays');

const letterPositions = function(string) {
  const results = {};
  for (let i = 0; i < string.length; i++) {
    let currentCharacter = string[i];
    // check that current character isn't a blank space
    if (currentCharacter !== " ") {
      // if currentCharacter is not present, then make new entry in object to be currentCharacter
      if (!results[currentCharacter]) {
        results[currentCharacter] = [i];
      } else {
        // if currentCharacter is present, push index # to array
        results[currentCharacter].push(i);
      }
    }
  }
  return results;
};
console.log(letterPositions("hello"));

//test code
assertArraysEqual(letterPositions("hello").h, [0]);
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").l, [2, 3]);
assertArraysEqual(letterPositions("hello").o, [4]);

module.exports = letterPositions;