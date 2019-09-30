const RedLooper = require('../src/RedLooper');
const valueToText =require( "../valueToText");

describe('Test add', () => {
	// test('add test - define', () => {
	// 	RedLooper.add('test',function(){});
	// 	expect(RedLooper.has('test')).toEqual(true);
	// });
	// test('add test - redefine', () => {
	// 	expect(	RedLooper.add('test',function(){})).toBeFalsy();
	// });
	[1, true, false, null, undefined, function () {}, [], {}].forEach(function (v) {
		test('add test - input ' + valueToText(v), () => {
			expect(RedLooper.add(v, function () {
			})).toBeFalsy();
		});
	})

})
test('del test', () => {
	RedLooper.del('test');
	expect(RedLooper.has('test')).toEqual(false);

});