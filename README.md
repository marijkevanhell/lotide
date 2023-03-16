# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @marijkevanhell/lotide`

**Require it:**

`const _ = require('@marijkevanhell/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual`: assertation for arrays
* `assertEqual`: assertation for use
* `assertObjectsEqual`: assertation for objects
* `countLetters`: counts how many times letter appears in string
* `countOnly`: counts how many times string appears in array
* `eqArrays`: checks for matching arrays
* `eqObjects`: checks for matching key value pairs
* `findKey`: returns key by finding matching key value pair
* `findKeyByValue`: returns key by finding matching value
* `flatten`: flattens nested arrays into one array
* `head`: grabs first element in array
* `middle`: grabs middle element or elements in array
* `tail`: grabs everything but first element in array
* `map`: returns first letter of first element in array
* `letterPosition`: returns index of letter in array
* `without`: returns array when requested element is removed
* `takeUntil`: returns section of array up until stop request is called
