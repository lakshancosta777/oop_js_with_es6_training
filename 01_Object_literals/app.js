/**
 * let keyword is the replacement for var in ES6.
 * ES5 var has used for declaring variables.
 * var has number of issues when it comes to scoping.
 * For the best practice stop using var, use let or const instead.
 * const is basically used for defining constants.
 * For reassignable variables use let.
 */

/**
 * const circle = {}; These curly braces, we refer them as Object literal syntax.
 * An object in JavaScript is essentially a collection of key, value pairs
 *
 */
const circle = {
  rasius: 1,
  location: {
    x: 1,
    y: 1,
  },
  //ES6 arrow function
  draw: () => {
    console.log("draw");
  },
};

circle.draw();
