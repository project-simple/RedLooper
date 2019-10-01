/******/ (function(modules) { // webpackBootstrap
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
/*!**************************!*\
  !*** ./src/RedLooper.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n\r\n\tvar RedLooper;\r\n\tvar tick;\r\n\tvar loopList_main;\r\n\tvar loopMap = {};\r\n\tloopList_main = []\r\n\ttick = function (time) {\r\n\t\tvar i, len;\r\n\t\ti = 0;\r\n\t\tlen = loopList_main.length;\r\n\t\tfor (i; i < len; i++) {\r\n\r\n\t\t\tloopList_main[i](time)\r\n\t\t}\r\n\t\trequestAnimationFrame(tick)\r\n\t};\r\n\trequestAnimationFrame(tick);\r\n\tvar makeMethods = function (targetMap, targetList) {\r\n\t\treturn {\r\n\t\t\tadd: function (key, handler) {\r\n\t\t\t\ttypeof key == 'string' || new Error('key allow only sting. input value : ' + key);\r\n\t\t\t\ttypeof handler == 'function' || new Error('handler allow only function. input value : ' + handler);\r\n\t\t\t\tif(targetMap[key]) new Error('already defined key. input value : ' + key);\r\n\t\t\t\ttargetMap[key] = handler;\r\n\t\t\t\ttargetList.push(handler);\r\n\t\t\t},\r\n\t\t\thas: function (key) {\r\n\t\t\t\treturn targetMap.hasOwnProperty(key);\r\n\t\t\t},\r\n\t\t\tdel: function (key) {\r\n\t\t\t\tvar t0;\r\n\t\t\t\tt0 = targetList.indexOf(targetMap[key])\r\n\t\t\t\tif (t0 > -1) {\r\n\t\t\t\t\ttargetList.splice(t0, 1)\r\n\t\t\t\t\tdelete targetMap[key]\r\n\t\t\t\t}\r\n\t\t\t},\r\n\t\t\tdelAll: function () {\r\n\t\t\t\ttargetMap = {};\r\n\t\t\t\ttargetList.length = 0;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\tvar t0;\r\n\tt0 = makeMethods(loopMap, loopList_main)\r\n\r\n\tRedLooper = {\r\n\t\tadd: t0.add,\r\n\t\t// addBefore:addBefore,\r\n\t\t// addAfter:addAfter,\r\n\t\t// //\r\n\t\thas: t0.has,\r\n\t\t// hasBeforeList:hasBeforeList,\r\n\t\t// hasMainList:hasMainList,\r\n\t\t// hasAfterList:hasAfterList,\r\n\t\t// //\r\n\t\tdel: t0.del,\r\n\t\tdelAll: t0.delAll\r\n\t\t// delBeforeList:delBeforeList,\r\n\t\t// delMainList:delMainList,\r\n\t\t// delAfterList:delAfterList,\r\n\t\t// delAll:delAll,\r\n\t};\r\n\tObject.freeze(RedLooper);\n\n//# sourceURL=webpack:///./src/RedLooper.js?");

/***/ })

/******/ });