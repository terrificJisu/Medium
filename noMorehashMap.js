/**
 * ref: https://medium.com/better-programming/stop-using-objects-as-hash-maps-in-javascript-9a272e85f6a8
 * Stop using objects as hash maps in javascript
 * 
 */

const map = {};

// insert key-value-pair
map['key1'] = 'value1';
map['key2'] = 'value2';
map['key3'] = 'value3';

// check if map contians key
if (map['key1']) {
  console.log('Map contains key1');
}

// get value with specific key
console.log(map['key1']);


/**
 * 
 */
const map = new Map();
const myFunction = () => console.log('I am a useful function.');
const myNumber = 7;
const myObject = {
  name: 'plainObjectValue',
  otherKey: 'otherValue'
};
map.set(myFunction, 'function as a key');
map.set(myNumber, 'number as a key');
map.set(myObject, 'object as a key');

console.log(map.get(myFunction)); // function as a key
console.log(map.get(myNumber)); // number as a key
console.log(map.get(myObject)); // object as a key

/**
 * 
 */
const map1 = new Map();
map1.set('someKey1', 1);
map1.set('someKey2', 1);
// ...
map1.set('someKey100', 1);

console.log(map1.size) // 100, Runtime: O(1)

const plainObjMap = {};
plainObjMap['someKey1'] = 1;
plainObjMap['someKey2'] = 1;
// ...
plainObjMap['someKey100'] = 1;

console.log(Object.keys(plainObjMap).length) // 100, Runtime: O(n)

/**
 * 
 */
const map = new Map();
map.set('someKey1', 1);
map.set('someKey2', 2);
map.set('someKey3', 3);

for (let [key, value] of map) {
  console.log(`${key} = ${value}`);
}
// someKey1 = 1
// someKey2 = 2
// someKey3 = 3

const plainObjMap = new Map();
plainObjMap['someKey1'] = 1;
plainObjMap['someKey2'] = 2;
plainObjMap['someKey3'] = 3;

for (let key of Object.keys(plainObjMap)) {
  const value = plainObjMap[key];
  console.log(`${key} = ${value}`);
}
// someKey1 = 1
// someKey2 = 2
// someKey3 = 3

/**
 * No key overriding
 */
const map = new Map();
map.set('someKey1', 1);
map.set('someKey2', 2);
map.set('toString', 3); // No problem for Map

const plainObjMap = new Map();
plainObjMap['someKey1'] = 1;
plainObjMap['someKey2'] = 2;
plainObjMap['toString'] = 3; // Oops, native property