/**
 * Prototype is just a regulara object in memeory
 * Every object has a prototype or a parent, ecept the root object
 */

// Example
let x = {};
let y = {};

let root = Object.getPrototypeOf(x) === Object.getPrototypeOf(y);
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

// Multi Level inheritance

let myArray = [];
console.log(myArray);

/**
 * Output => []length: 0 __proto__: Array(0)
 * Prototype of myArray is __proto__: Array(0) is Array base object, which is the prototype or the parent for all arrays in javascript.
 */

console.log(Object.getPrototypeOf(myArray));

/**
 * Prototype or the parent for the Array Base object is the Object Base or the root object in Javascript.
 * myArray => arrayBase => objectBase
 * This is called multi level inheritance.
 */

function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draq");
  };
}

const circle = new Circle(10);

console.log(circle);
/**
 * Output =>
 *  Circle {radius: 10, draw: ƒ}
    draw: ƒ ()
    radius: 10
    __proto__: Object
 */
/**
 * In the outout of the circle object, it has a prototype.
 * This prototype is the prototype of all circle objects that we create using our Circle constructor.
 * Its the circle base.
 * So everytime we call the circle constructor to create a new circle object, this constructor will create a new object
 * and sets its prototype property to circle base.
 * Objects created by a given constructor will have the same prototype.
 * So all circle objects created by the Circle constructor will have the same prototype.
 * Similar to that, all arrays created using Array constructor will have the same prototype
 *
 * Circle base also has a prototype. Its the object base, the root object in Javascript
 */

const newCircle = new Circle(15);

let compare =
  Object.getPrototypeOf(circle) === Object.getPrototypeOf(newCircle);
console.log(compare);
// Output => true

/**
 * So what we have in the memeory now
 * circle => circleBase => objectBase
 * circle object inherits from circle base and circleBase inherits from objectBase which is root object.
 */
