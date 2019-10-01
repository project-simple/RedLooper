"use strict";

	var RedLooper;
	var tick;
	var loopList_main;
	var loopMap = {};
	loopList_main = []
	tick = function (time) {
		var i, len;
		i = 0;
		len = loopList_main.length;
		for (i; i < len; i++) {

			loopList_main[i](time)
		}
		requestAnimationFrame(tick)
	};
	requestAnimationFrame(tick);
	var makeMethods = function (targetMap, targetList) {
		return {
			add: function (key, handler) {
				typeof key == 'string' || new Error('key allow only sting. input value : ' + key);
				typeof handler == 'function' || new Error('handler allow only function. input value : ' + handler);
				if(targetMap[key]) new Error('already defined key. input value : ' + key);
				targetMap[key] = handler;
				targetList.push(handler);
			},
			has: function (key) {
				return targetMap.hasOwnProperty(key);
			},
			del: function (key) {
				var t0;
				t0 = targetList.indexOf(targetMap[key])
				if (t0 > -1) {
					targetList.splice(t0, 1)
					delete targetMap[key]
				}
			},
			delAll: function () {
				targetMap = {};
				targetList.length = 0;
			}
		}
	}
	var t0;
	t0 = makeMethods(loopMap, loopList_main)

	RedLooper = {
		add: t0.add,
		// addBefore:addBefore,
		// addAfter:addAfter,
		// //
		has: t0.has,
		// hasBeforeList:hasBeforeList,
		// hasMainList:hasMainList,
		// hasAfterList:hasAfterList,
		// //
		del: t0.del,
		delAll: t0.delAll
		// delBeforeList:delBeforeList,
		// delMainList:delMainList,
		// delAfterList:delAfterList,
		// delAll:delAll,
	};
	Object.freeze(RedLooper);