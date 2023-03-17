const assertEqual = require('./assertEqual');

const findKey = function(object, callback) {
  //iterates over starNames and Object.keys() returns keys from object
  for (let key of Object.keys(object)) {
    //if the callback matches the value and returns truthely, return matching key, else return undefined
    if (callback(object[key]) === true) {
      return key;
    }
  }
  return undefined;
};

//test code
//assigning variables to a few test cases using the arrow function to refactor code
const retrieveStarName1 = (x => x.stars === 1);
const retrieveStarName2 = (x => x.stars === 2);
const retrieveStarName3 = (x => x.stars === 3);
const retrieveStarNameUndefined = (x => x.stars === 8);

//making object starNames to hold the list of stars
const starNames = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2); // => "noma"

assertEqual(findKey(starNames, retrieveStarName1), "Blue Hill");
assertEqual(findKey(starNames, retrieveStarName2), "noma");
assertEqual(findKey(starNames, retrieveStarName3), "Akaleri");
assertEqual(findKey(starNames, retrieveStarNameUndefined), undefined);

module.exports = findKey;