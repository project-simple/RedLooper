
describe('Test add', function() {
	it('add test - define', () => {
		RedLooper.add('test',function(){});
		expect(RedLooper.has('test')).to.be.true;
	});
	it('add test - redefine', () => {
		let result =true;
		try{
			RedLooper.add('test',function(){})
		}catch (e) {
			result=false
		}
		expect(	result).to.be.false;
	});
	[1, true, false, null, undefined, function () {}, [], {a:1}].forEach(function (v) {
		eval(`
		it('add - input ' + valueToText(v), function() {
			let result =true;
			try{
				RedLooper.add(${valueToText(v)}, function () {})
			}catch (e) {
				result=false;
			}
			expect(result).to.be.false
		});
		`)
	})

})
function add() {
	return Array.prototype.slice.call(arguments).reduce(function(prev, curr) {
		return prev + curr;
	}, 0);
}
