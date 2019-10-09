const requestAnimationFrame = require('raf').polyfill();
const expect = require('chai').expect;
const assert =require('chai').assert;
const RedLooper = require('../dist/RedLooper.min');
const valueToText =require( "value-to-text");
const fs = require("fs");
const data = fs.readFileSync("./testMocha/RedLooper.run.js","utf8",function (err,data){console.log(err)});
console.log("data");
eval(data);