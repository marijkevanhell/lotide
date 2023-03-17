const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  console.log(`Example label: ${inspect(actual)}`);
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

//test code
const obj1 = {model: 'Suzuki'};
const obj2 = {model: 'Honda'};
const obj3 = {model: 'Suzuki'};

//should fail
assertObjectsEqual(obj1, obj2);
//should pass
assertObjectsEqual(obj1, obj3);