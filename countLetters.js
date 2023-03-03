// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);
  }
};

//ACTUAL FUNCTION
const countLetters = function(sentence) {
  //make empty object
  let finalSentence = {};
  //iterate through sentence
  for (const letter of sentence) {
    //if not open space, add count to empty array, else leave it
    if (letter !== " ") {
      if (finalSentence[letter]) {
        finalSentence[letter] += 1;
      } else {
        finalSentence[letter] = 1;
      }
      
    }
  }
  return finalSentence;
};
console.log(countLetters("lighthouse in the house"));

//test code
const result = countLetters("lighthouse in the house");
assertEqual(result.l, 1);
assertEqual(result.i, 2);
assertEqual(result.g, 1);
assertEqual(result.h, 4);
assertEqual(result.t, 2);
assertEqual(result.o, 2);
assertEqual(result.u, 2);
assertEqual(result.s, 2);
assertEqual(result.e, 3);
assertEqual(result.n, 1);


