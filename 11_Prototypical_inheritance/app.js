/**
 * Prototype is just a regulara object in memeory
 * Every object has a prototype or a parent, ecept the root object
 */

// Example
let x = {};
let y = {};

var root = Object.getPrototypeOf(x) === Object.getPrototypeOf(y);
console.log(root);
// Output => true

/**
 * Prototype is the parent or the object base for an object.
 * Both x,y objects reference object base. So we have single instance of object base in memory
 */

console.log(x.toString());
// Output => "[object object]"

/**
 * When we access a property or a method on an object, javascript engine first looks for that property or method on the object itself.
 * If it cannot find it, then it looks at the prototype of that object.
 */
