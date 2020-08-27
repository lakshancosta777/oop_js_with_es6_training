/**
 * Every object in javaScript has the property called constructor
 * It references the function that was used to construct or create an object.
 */

// Constructor Function
function Circle(radius) {
  this.radius = radius;
  this.draw = () => {
    console.log("draw from Constructor Function");
  };
}

const another = new Circle(1);
console.log(another.constructor);

/**
 * Output =>
 * ƒ Circle(radius) {
 *    this.radius = radius;
 *    this.draw = () => {
 *      console.log("draw from Constructor Function");
 *    };
 *  }
 * As we see it returns the Circle function that we used to create the object.
 */

// Factory Function
function createCircle(radius) {
  return {
    radius,
    draw: () => {
      console.log("draw from Factory Function");
    },
  };
}

const circle = createCircle(1);
console.log(circle.constructor);

/**
 * Output =>
 * ƒ Object() { [native code] }
 * ƒ Object() is the built-in constructor in the JavaScript
 * When we create an object using object literal syntax, internally JavaScript engine uses this constructor function.
 *
 */

let x = {};
/**
 * When we use object literal syntax to create an object, JavaScript engine translate that into something as follows.
 * let x = new Object();
 * This object we created and return from Factory Function and because we used the object literal syntax.
 * Internally it was created using this object cunstructor function.
 * In JavaScript we have another built-in constructors to crete numbers, strings etc.
 *
 */

new String(); // But usually we use string literals ' ', " " and ` `
// Using these literals is cleaer and simpler than using the constructor

// Examples :
new Boolean(); // true,false
new Number(); // 1,2,3,...

/**
 * Summary
 *
 * Every object has a constructor property, and that references the function that was used to create that object.
 */
