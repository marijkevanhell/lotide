//FUNCTION IMPLIMENTATION
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

//ACTUAL FUNCTION
const letterPositions = function(string) {
  // make empty object
  const results = {};
  //iterate through string
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