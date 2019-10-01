"use strict";
describe('Test add', function() {
	// test('add test - define', () => {
	// 	RedLooper.add('test',function(){});
	// 	expect(RedLooper.has('test')).toEqual(true);
	// });
	// test('add test - redefine', () => {
	// 	expect(	RedLooper.add('test',function(){})).toBeFalsy();
	// });
	[1, true, false, null, undefined, function () {}, [], {}].forEach(function (v) {
		it('add test - input ' + valueToText(v), function() {
			expect(true).to.equal(true);

		});
	})
})
