const assertEqual = require('./assertEqual');

const tail = function(inputArray) {
  const tailArray = [];
  for (let x = 0; x < inputArray.length; x++) {
    if (x === 0) {
      //Do nothing//
    } else {
      console.log("value of x", x);
      tailArray.push(inputArray[x]);
      console.log("value of tailArray", tailArray);
    }
  }
  return tailArray;
};


module.exports = tail;