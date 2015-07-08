'use strict';

var greet = require('./greet.js').greet;
var arg = process.argv[2];

console.log(greet(arg));
