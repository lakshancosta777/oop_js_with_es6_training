/**
 * If we need to create another circle object we have to duplicate the circle object again in current implementation.
 * Once we duplicate the object and if there is a bug in a method , we have to come back and fix this in multiple places.
 * If the object has 10 methods need to fix in 20 places.
 * Object literal syntax is not a good way to create an object and duplicate it if object has at least one method.
 * If an object has one or more methods, we would say the object has behaviour
 * Solution is for this is to use a factory or constructor function
 */

const circle1 = {
  radius: 1,
  location: {
    x: 1,
    y: 1,
  },
  // Bug in the function
  draw: () => {
    console.log("draw");
  },
};

circle1.draw();

const circle2 = {
  radius: 2,
  location: {
    x: 2,
    y: 2,
  },
  // Bug in the function
  draw: () => {
    console.log("draw");
  },
};

circle2.draw();

// ==================== Solution One - Factory Function ========================

// Factory Function
function createCircle(radius) {
  return {
    radius, //radius: radius, In ES6 if the key and value both same we can reduce the noice of the code by removing value.
    draw: () => {
      console.log("draw from Factory Function");
    },
  };
}

const circleF = createCircle(1);
circleF.draw();

// ==================== Solution Twp - Constructor Function ========================

/**
 * Once we use new operator few things happen behind
 * new operator will create an empty object => {}
 * and it will use this keyword to point to that object.
 * Because by default (this) points to the global object.
 */

// Constructor Function
function Circle(radius) {
  this.radius = radius;
  this.draw = () => {
    console.log("draw from Constructor Function");
  };
}

/**
 * If we log (this) inside the function => {console.log("this = >", this);}
 * Output will be like as follows.
 * this => Circle{} becase of using new keyword.
 * If we remove the new keword => {const circleC = Circle(2);}
 * Output will be like as follows
 * this = > Window {parent: Window, opener: null, top: Window, length: 0, frames: Window, …}
 * Window is the global object in the browser
 */

const circleC = new Circle(2);
circleC.draw();

/**
 * Once we use the new operator to call a function, 3 things will happen.
 * 1. This new keyword will create an empty object.
 * 2. It will use (this) to point to that object.
 * 3. Finally it will return the object from the function.
 * We do not have to explicitly use (return this;) statement.
 * This will happen automatically when we use the new operator.
 *
 */
