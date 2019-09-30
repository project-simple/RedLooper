"use strict";
;(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
		typeof define === 'function' && define.amd ? define(factory) :
			(global.RedLooper = factory());
}(this, (function () {

	var valueToText;
	valueToText=function (v) {
		return v === undefined ? 'undefined' : v === null ? 'null' : typeof v == 'function' ? v :JSON.stringify(v)
	}
	return  valueToText;
})));