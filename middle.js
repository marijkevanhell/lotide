const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

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

module.exports = middle;


