const assertArraysEquals = function(arr1, arr2) {
  let x = arr1.length
  let y = arr2.length
  if (x != y) {
    console.log("❌❌❌Assertion Failed: true");
    return
  }
  let arrays_same = true
  for (let x = 0; x < arr1.length; x++) {
    if (arr1[x] !== arr2[x]) {
      arrays_same = false
      console.log("❌❌❌Assertion Failed: true");
      return
    }
  }
  console.log("✅✅✅Assertion Passed: true");
  return
};

