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



// ACTUAL FUNCTION
const middle = function(array) {
  //if array is between 1-3 or index 0,1,2, return empty array
  if (array.length <= 2) {
    return [];
  }
  //assign new variable called middleNum to our array, divide by 2 and round it to see if it's even or odd 
  let middleNum = Math.floor(array.length / 2);
  //shows if even is true
  if (array.length % 2 === 0) {
    //takes the middle two numbers so the middle number on the right - 1 gives left #, [middleNum] gives # to right #
    return [array[middleNum - 1], array [middleNum]];
    //everything else would be odd so just return the middle number in array
  } else {
    return [array[middleNum]];
  }
};

  
// test code
//returns empty array
console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []
//returns 1 element
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]
//returns 2 elements
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]

assertArraysEqual(middle([1]), []);
