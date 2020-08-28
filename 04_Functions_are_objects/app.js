/**
 * In JavaScript all functions are actually an objects.
 * Every object in JavaScript has a constructor property and it references to the function was used to create an opbject
 * We can log constructor property of Circle function
 *
 */

function Circle(radius) {
  this.radius = radius;
  this.draw = () => {
    console.log("draw from Constructor Function");
  };
}

console.log(Circle.name); // This will returns name of the function
console.log(Circle.length); // This will returns number of arguments passed.

console.log(Circle.constructor);
/**
 * Output will be => ƒ Function() { [native code] }
 * Here we can see another built in constructor called Function()
 * When we create a function using this syntax, JavaScript engine will use this Function() constructor to create the object
 *
 */

// Manually creating a function using Function() constructor
const Circle1 = new Function(
  "radius",
  `
  this.radius = radius;
  this.draw = () => {
    console.log("draw from Function() constructor");
  };
  `
);

const circle = new Circle1(1);
console.log(circle);
/**
 * Outout => {radius: 1, draw: ƒ}
 * Its returning real circle object with two members.
 */

// call() method

Circle.call({}, 1);
/**
 * {} will reference to (this) and can pass multiple argumets explicitly
 * Its exactly same like => new Circle(1);
 */

// apply method

Circle.apply({}), [1, 2, 3];
/**
 * Its exactly same like call() method.
 * Difference is instead of passing all arguments explicitly, we pass them in a array.
 * This is useful if you already have an array somewhere else in your application and you want to pass an array as the second arguemnt to the apply method.
 */

// example

function MultiCircle(radius) {
  this.radius = radius;
  this.draw = () => {
    for (let index = 0; index < this.radius.length; index++) {
      const circleRadius = this.radius[index];
      console.log("Draw circle as radius of : " + circleRadius);
    }
  };
}

MultiCircle.apply([{}, 1, 3, 4, 5, 2, 6, 8]).;
