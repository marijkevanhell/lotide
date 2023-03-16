const assertEqual = require('./assertEqual');

//ACTUAL FUNCTION
const findKeyByValue = function(object, value) {
  //iterates over bestTVShowsByGenre and Object.keys() returns keys from object
  for (let key of Object.keys(object)) {
    //if the key matches the given value, return key, else return undefined
    if (object[key] === value) {
      return key;
    }
  }
  return undefined;
};

//test code
const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "Fresh Prince of Bel Air"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sciFi");