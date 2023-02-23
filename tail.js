const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);
  }
};
const tail = function(inputArray){
  const tailArray = []
  for (let x = 0; x < inputArray.length; x++){
    if (x === 0){
      //Do nothing//
    } else {
      console.log("value of x", x)
      tailArray.push(inputArray[x])
      console.log("value of tailArray", tailArray)
    }
  }
  return tailArray
}

// Test Case: Check the original array 
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

