function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}
const circle = new Circle(10);
let compare = circle.__proto__ === Circle.prototype;
console.log(compare);

/**
 * Output => true
 * circle.__proto__ is the parent of circle object.
 * Circle.prototype is the object that will be used as the parent for the objects created by a Circle constructor.
 * Both these are equal
 *
 */

// Example

let array = []; // under the hood [new Array()] Array constructor will be called.
let compareProto = array.__proto__ === Array.prototype;
console.log(compareProto);

// Output => true
