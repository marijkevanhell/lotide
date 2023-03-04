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

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);
  }
};

//ACTUAL FUNCTION
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  //getting keys from each object and counting how many
  let obj1lgth = Object.keys(object1);
  let obj2lgth = Object.keys(object2);
  // if amount of keys doesn't equal obj 1 & obj 2, return false
  if (obj1lgth.length !== obj2lgth.length) {
    return false;
  }
  //iterates over keys of object 1
  for (let key of obj1lgth) {
    //check if both are arrays
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      //if not, return false
      if (!eqArrays(object1[key], object2[key]));
      return false;
    }
    //if value of entry in obj 1 at key doesn't match value of entry in obj 2 at key, return false
    if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

//test code
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
eqObjects(shirtObject , anotherShirtObject); // => true
assertEqual(eqObjects(shirtObject , anotherShirtObject), true);

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
eqObjects(shirtObject , longSleeveShirtObject); // => false
assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false);

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject); // => true
assertEqual(eqObjects(multiColorShirtObject , anotherMultiColorShirtObject), true);

const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject); // => false
assertEqual(eqObjects(multiColorShirtObject , longSleeveMultiColorShirtObject), false);