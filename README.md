# RedLooper
Simple Javascript Loop Manager

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

[![NPM](https://nodei.co/npm/project-simple-red-looper.png)](https://npmjs.org/package/project-simple-red-looper)

github - [here](https://github.com/project-simple/RedLooper)

# Install 
#### npm 
```npm
npm install project-simple-red-looper --save-dev
```
```
import RedLooper from 'project-simple-red-looper';
```
#### browser
```html
<script src="https://project-simple.github.io/RedLooper/RedLooper.js"></script>
<script>
   RedLooper.addMainLoop('testMainLoop1',function(){ console.log('testMainLoop1')});
   // The registered loop is executed every frame.
</script>
```

# Run Cycle
```
per frame
|--> run beforeLoops
|----> run mainLoops
|------> run afterLoops

```

# API

#### RedLooper.addMainLoop(key:String, handler:Function)
* Usage is the same for addBeforeLoop and addAfterLoop.
```javascript
RedLooper.addMainLoop( 'test', function(){ console.log('test1' ) });
```
* "key" do not allow duplicates in individual loop lists.
```javascript
RedLooper.addMainLoop( 'testKey', function(){ }); // ok
RedLooper.addMainLoop( 'testKey', function(){ }); // fail - already defined key!!
// individual loop area
RedLooper.addBeforeLoop( 'key_test', function(){ }); // ok
RedLooper.addMainLoop( 'key_test', function(){ }); // ok
RedLooper.addAfterLoop( 'key_test', function(){ }); // ok
RedLooper.addBeforeLoop( 'key_test', function(){ }); // fail
RedLooper.addMainLoop( 'key_test', function(){ }); // fail
RedLooper.addAfterLoop( 'key_test', function(){ }); // fail
```

#### RedLooper.getMainLoop(key)
* Usage is the same for getBeforeLoop and getAfterLoop.
```javascript
var getTest = function(){};
RedLooper.addMainLoop( 'getTest', getTest);
console.log( RedLooper.getMainLoop( 'getTest') == getTest); // true
```

#### RedLooper.getMainLoopList()
* Usage is the same for getBeforeLoopList and getAfterLoopList.
```javascript
var getTest1 = function(){};
console.log( RedLooper.getMainLoopList()); // []
console.log( RedLooper.getMainLoopList().length); // 0
RedLooper.addMainLoop( 'getTest1', getTest1);
console.log( RedLooper.getMainLoopList()); // [getTest1]
console.log( RedLooper.getMainLoopList().length); // 1 
```

#### RedLooper.hasMainLoop(key)
* Usage is the same for hasBeforeLoop and hasAfterLoop.
```javascript
RedLooper.addMainLoop( 'hasTest', function(){});
console.log( RedLooper.hasMainLoop( 'hasTest')); // true
console.log( RedLooper.hasMainLoop( 'noHasTest')); // false
```

#### RedLooper.delMainLoop(key)
* Usage is the same for delBeforeLoop and delAfterLoop.
```javascript
RedLooper.addMainLoop( 'delTest', function(){});
console.log( RedLooper.hasMainLoop( 'delTest')); // true
RedLooper.delMainLoop( 'delTest');
console.log( RedLooper.hasMainLoop( 'delTest')); // false
```
#### RedLooper.delAll()
```javascript
RedLooper.addBeforeLoop( 'delBeforeTest', function(){});
RedLooper.addMainLoop( 'delMainTest', function(){});
RedLooper.addAfterLoop( 'delAfterTest', function(){});
console.log( RedLooper.hasBeforeLoop( 'delBeforeTest')); // true
console.log( RedLooper.hasMainLoop( 'delMainTest')); // true
console.log( RedLooper.hasAfterLoop( 'delAfterTest')); // true
RedLooper.delAll();
console.log( RedLooper.hasBeforeLoop( 'delBeforeTest')); // false
console.log( RedLooper.hasMainLoop( 'delMainTest')); // false
console.log( RedLooper.hasAfterLoop( 'delAfterTest')); // false
```
