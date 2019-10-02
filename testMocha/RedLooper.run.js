describe('Test beforeLoop',function() {
	afterEach(function(){
		RedLooper.delAll();
	});
	describe('Test hasBeforeLoop', function () {
		it('test hasBeforeLoop', function () {
			expect(RedLooper.hasBeforeLoop('test')).to.be.false;
		});
		it('test hasBeforeLoop', function () {
			RedLooper.addBeforeLoop('test', function () {
			});
			expect(RedLooper.hasBeforeLoop('test')).to.be.true;
		});
	});
	describe('Test getBeforeLoop', function () {
		var testFunc = function () {
			console.log("testFunc")
		};
		it('test - getBeforeLoop', function () {
			expect(RedLooper.getBeforeLoop('getTest')).to.be.undefined;
		});
		it('test - addBeforeLoop', function () {
			RedLooper.addBeforeLoop('getTest', testFunc);
			expect(RedLooper.getBeforeLoop('getTest')).to.be.equal(testFunc);
		});
	});
	describe('Test getBeforeLoopList', function () {
		var testFunc = function () {
			console.log("testFunc")
		};
		var testFunc2 = function () {
			console.log("testFunc2")
		};
		it('test - getBeforeLoopList', function () {
			expect(RedLooper.getBeforeLoopList()).to.have.lengthOf(0);
		});
		it('test - getBeforeLoopList', function () {
			RedLooper.addBeforeLoop('getTest', testFunc);
			expect(RedLooper.getBeforeLoopList()).to.have.lengthOf(1);
		});
		it('test - getBeforeLoopList', function () {
			RedLooper.addBeforeLoop('getTest1', testFunc);
			RedLooper.addBeforeLoop('getTest2', testFunc2);
			expect(RedLooper.getBeforeLoopList()[0]).to.be.equal(testFunc);
		});
		it('test - getBeforeLoopList', function () {
			RedLooper.addBeforeLoop('getTest1', testFunc);
			RedLooper.addBeforeLoop('getTest2', testFunc2);
			expect(RedLooper.getBeforeLoopList()[1]).to.be.equal(testFunc2);
		});
	});
	describe('Test addBeforeLoop', function () {
		it('test - addBeforeLoop define', function () {
			RedLooper.addBeforeLoop('test', function () {
			});
			expect(RedLooper.hasBeforeLoop('test')).to.be.true;
		});
		it('test - redefine', function () {
			let result = true;
			RedLooper.addBeforeLoop('test', function () {
			});
			try {
				RedLooper.addBeforeLoop('test', function () {
				});
			} catch (e) {
				console.log(e);
				result = false
			}
			expect(result).to.be.false;
		});
		[1, true, false, null, undefined, function () {
		}, [], {a: 1}].forEach(function (v) {
			it('test RedLooper.addBeforeLoop( ' + valueToText(v) + ' , function(){} )', function () {
				try {
					RedLooper.addBeforeLoop(v, function () {
					})
				} catch (e) {
					console.log(e)
				}
				expect(RedLooper.hasBeforeLoop(v)).to.be.false;
			});
		})
	});
	describe('Test delBeforeLoop', function () {
		it('test delBeforeLoop', function () {
			RedLooper.addBeforeLoop('test', function () {
			});
			RedLooper.delBeforeLoop('test');
			expect(RedLooper.hasBeforeLoop('test')).to.be.false;
		});
	});
	describe('Test delBeforeLoopAll', function () {
		it('test delBeforeLoopAll', function () {
			RedLooper.addBeforeLoop('test1', function () {
			});
			RedLooper.addBeforeLoop('test2', function () {
			});
			RedLooper.addBeforeLoop('test3', function () {
			});
			RedLooper.addBeforeLoop('test4', function () {
			});
			RedLooper.delBeforeLoopAll();
			expect(RedLooper.hasBeforeLoop('test1')).to.be.false;
		});
	});
});
describe('Test mainLoop',function() {
	afterEach(function(){
		RedLooper.delAll();
	});
	describe('Test hasMainLoop', function () {
		it('test hasMainLoop', function () {
			expect(RedLooper.hasMainLoop('test')).to.be.false;
		});
		it('test hasMainLoop', function () {
			RedLooper.addMainLoop('test', function () {
			});
			expect(RedLooper.hasMainLoop('test')).to.be.true;
		});
	});
	describe('Test getMainLoop', function () {
		var testFunc = function () {
			console.log("testFunc")
		};
		it('test - getMainLoop', function () {
			expect(RedLooper.getMainLoop('getTest')).to.be.undefined;
		});
		it('test - addMainLoop', function () {
			RedLooper.addMainLoop('getTest', testFunc);
			expect(RedLooper.getMainLoop('getTest')).to.be.equal(testFunc);
		});
	});
	describe('Test getMainLoopList', function () {
		var testFunc = function () {
			console.log("testFunc")
		};
		var testFunc2 = function () {
			console.log("testFunc2")
		};
		it('test - getMainLoopList', function () {
			expect(RedLooper.getMainLoopList()).to.have.lengthOf(0);
		});
		it('test - getMainLoopList', function () {
			RedLooper.addMainLoop('getTest', testFunc);
			expect(RedLooper.getMainLoopList()).to.have.lengthOf(1);
		});
		it('test - getMainLoopList', function () {
			RedLooper.addMainLoop('getTest1', testFunc);
			RedLooper.addMainLoop('getTest2', testFunc2);
			expect(RedLooper.getMainLoopList()[0]).to.be.equal(testFunc);
		});
		it('test - getMainLoopList', function () {
			RedLooper.addMainLoop('getTest1', testFunc);
			RedLooper.addMainLoop('getTest2', testFunc2);
			expect(RedLooper.getMainLoopList()[1]).to.be.equal(testFunc2);
		});
	});
	describe('Test addMainLoop', function () {
		it('test - addMainLoop define', function () {
			RedLooper.addMainLoop('test', function () {
			});
			expect(RedLooper.hasMainLoop('test')).to.be.true;
		});
		it('test - redefine', function () {
			let result = true;
			RedLooper.addMainLoop('test', function () {
			});
			try {
				RedLooper.addMainLoop('test', function () {
				});
			} catch (e) {
				console.log(e);
				result = false
			}
			expect(result).to.be.false;
		});
		[1, true, false, null, undefined, function () {
		}, [], {a: 1}].forEach(function (v) {
			it('test RedLooper.addMainLoop( ' + valueToText(v) + ' , function(){} )', function () {
				try {
					RedLooper.addMainLoop(v, function () {
					})
				} catch (e) {
					console.log(e)
				}
				expect(RedLooper.hasMainLoop(v)).to.be.false;
			});
		})
	});
	describe('Test delMainLoop', function () {
		it('test delMainLoop', function () {
			RedLooper.addMainLoop('test', function () {
			});
			RedLooper.delMainLoop('test');
			expect(RedLooper.hasMainLoop('test')).to.be.false;
		});
	});
	describe('Test delMainLoopAll', function () {
		it('test delMainLoopAll', function () {
			RedLooper.addMainLoop('test1', function () {
			});
			RedLooper.addMainLoop('test2', function () {
			});
			RedLooper.addMainLoop('test3', function () {
			});
			RedLooper.addMainLoop('test4', function () {
			});
			RedLooper.delMainLoopAll();
			expect(RedLooper.hasMainLoop('test1')).to.be.false;
		});
	});
});
describe('Test afterLoop',function() {
	afterEach(function(){
		RedLooper.delAll();
	});
	describe('Test hasAfterLoop', function () {
		it('test hasAfterLoop', function () {
			expect(RedLooper.hasAfterLoop('test')).to.be.false;
		});
		it('test hasAfterLoop', function () {
			RedLooper.addAfterLoop('test', function () {
			});
			expect(RedLooper.hasAfterLoop('test')).to.be.true;
		});
	});
	describe('Test getAfterLoop', function () {
		var testFunc = function () {
			console.log("testFunc")
		};
		it('test - getAfterLoop', function () {
			expect(RedLooper.getAfterLoop('getTest')).to.be.undefined;
		});
		it('test - addAfterLoop', function () {
			RedLooper.addAfterLoop('getTest', testFunc);
			expect(RedLooper.getAfterLoop('getTest')).to.be.equal(testFunc);
		});
	});
	describe('Test getAfterLoopList', function () {
		var testFunc = function () {
			console.log("testFunc")
		};
		var testFunc2 = function () {
			console.log("testFunc2")
		};
		it('test - getAfterLoopList', function () {
			expect(RedLooper.getAfterLoopList()).to.have.lengthOf(0);
		});
		it('test - getAfterLoopList', function () {
			RedLooper.addAfterLoop('getTest', testFunc);
			expect(RedLooper.getAfterLoopList()).to.have.lengthOf(1);
		});
		it('test - getAfterLoopList', function () {
			RedLooper.addAfterLoop('getTest1', testFunc);
			RedLooper.addAfterLoop('getTest2', testFunc2);
			expect(RedLooper.getAfterLoopList()[0]).to.be.equal(testFunc);
		});
		it('test - getAfterLoopList', function () {
			RedLooper.addAfterLoop('getTest1', testFunc);
			RedLooper.addAfterLoop('getTest2', testFunc2);
			expect(RedLooper.getAfterLoopList()[1]).to.be.equal(testFunc2);
		});
	});
	describe('Test addAfterLoop', function () {
		it('test - addAfterLoop define', function () {
			RedLooper.addAfterLoop('test', function () {
			});
			expect(RedLooper.hasAfterLoop('test')).to.be.true;
		});
		it('test - redefine', function () {
			let result = true;
			RedLooper.addAfterLoop('test', function () {
			});
			try {
				RedLooper.addAfterLoop('test', function () {
				});
			} catch (e) {
				console.log(e);
				result = false
			}
			expect(result).to.be.false;
		});
		[1, true, false, null, undefined, function () {
		}, [], {a: 1}].forEach(function (v) {
			it('test RedLooper.addAfterLoop( ' + valueToText(v) + ' , function(){} )', function () {
				try {
					RedLooper.addAfterLoop(v, function () {
					})
				} catch (e) {
					console.log(e)
				}
				expect(RedLooper.hasAfterLoop(v)).to.be.false;
			});
		})
	});
	describe('Test delAfterLoop', function () {
		it('test delAfterLoop', function () {
			RedLooper.addAfterLoop('test', function () {
			});
			RedLooper.delAfterLoop('test');
			expect(RedLooper.hasAfterLoop('test')).to.be.false;
		});
	});
	describe('Test delAfterLoopAll', function () {
		it('test delAfterLoopAll', function () {
			RedLooper.addAfterLoop('test1', function () {
			});
			RedLooper.addAfterLoop('test2', function () {
			});
			RedLooper.addAfterLoop('test3', function () {
			});
			RedLooper.addAfterLoop('test4', function () {
			});
			RedLooper.delAfterLoopAll();
			expect(RedLooper.hasAfterLoop('test1')).to.be.false;
		});
	});
});