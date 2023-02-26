const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);
  }
};
 
const eqArrays = function(arr1, arr2) {
  let x = arr1.length
  let y = arr2.length
  if (x != y) return false
  let arrays_same = true
  for (let x = 0; x < arr1.length; x++) {
    if (arr1[x] !== arr2[x]) return false
  }
  return true
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);

