(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("RedLooper", [], factory);
	else if(typeof exports === 'object')
		exports["RedLooper"] = factory();
	else
		root["RedLooper"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/RedLooper.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/RedLooper.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

/*!
@author RedCamel / https://github.com/redcamel / webseon@gmail.com
MIT License
Copyright (c) 2019 ~ By RedCamel.
*/
var RedLooper;
var tick;
var totalLoopMap = {
	beforeLoop: {keyMap: {}, list: []},
	mainLoop: {keyMap: {}, list: []},
	afterLoop: {keyMap: {}, list: []}
};
tick = function (time) {
	var i, len;
	var tList;
	tList = totalLoopMap.beforeLoop.list;
	i = 0;
	len = tList.length;
	for (i; i < len; i++) tList[i](time);
	//
	tList = totalLoopMap.mainLoop.list;
	i = 0;
	len = tList.length;
	for (i; i < len; i++) tList[i](time);
	//
	tList = totalLoopMap.afterLoop.list;
	i = 0;
	len = tList.length;
	for (i; i < len; i++) tList[i](time);
	requestAnimationFrame(tick)
};
requestAnimationFrame(tick);
var makeMethods = function (title) {
	var targetMap, targetList;
	targetMap = totalLoopMap[title].keyMap;
	targetList = totalLoopMap[title].list;
	return {
		add: function (key, handler) {
			if (typeof key != 'string') throw new Error(title + ' - key allow only sting. input value : ' + key);
			if (typeof handler != 'function') throw new Error(title + ' - handler allow only function. input value : ' + handler);
			if (targetMap[key]) throw new Error(title + ' - already defined key. input value : ' + key);
			targetMap[key] = handler;
			targetList.push(handler);
		},
		has: function (key) {
			return targetMap.hasOwnProperty(key);
		},
		get: function (key) {
			return targetMap[key]
		},
		getList: function () {
			return targetList.concat()
		},
		del: function (key) {
			var t0;
			t0 = targetList.indexOf(targetMap[key]);
			if (t0 > -1) {
				targetList.splice(t0, 1);
				delete targetMap[key]
			}
		},
		delAll: function () {
			targetMap = totalLoopMap[title].keyMap = {};
			targetList = totalLoopMap[title].list = []
		}
	}
};
var mainLoopInfo, beforeLoopInfo, afterLoopInfo;
mainLoopInfo = makeMethods('mainLoop');
beforeLoopInfo = makeMethods('beforeLoop');
afterLoopInfo = makeMethods('afterLoop');
RedLooper = {
	addBeforeLoop: beforeLoopInfo.add,
	addMainLoop: mainLoopInfo.add,
	addAfterLoop: afterLoopInfo.add,
	//
	hasBeforeLoop: beforeLoopInfo.has,
	hasMainLoop: mainLoopInfo.has,
	hasAfterLoop: afterLoopInfo.has,
	//
	getBeforeLoop: beforeLoopInfo.get,
	getMainLoop: mainLoopInfo.get,
	getAfterLoop: afterLoopInfo.get,
	//
	getBeforeLoopList: beforeLoopInfo.getList,
	getMainLoopList: mainLoopInfo.getList,
	getAfterLoopList: afterLoopInfo.getList,
	//
	delBeforeLoop: beforeLoopInfo.del,
	delMainLoop: mainLoopInfo.del,
	delAfterLoop: afterLoopInfo.del,
	//
	delBeforeLoopAll: beforeLoopInfo.delAll,
	delMainLoopAll: mainLoopInfo.delAll,
	delAfterLoopAll: afterLoopInfo.delAll,
	//
	delAll: function () {
		beforeLoopInfo.delAll();
		mainLoopInfo.delAll();
		afterLoopInfo.delAll();
	}
};
/* harmony default export */ __webpack_exports__["default"] = (RedLooper);

/***/ })

/******/ })["default"];
});