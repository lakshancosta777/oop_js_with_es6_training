function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}
const circle1 = new Circle(10);
circle1.draw();
const circle2 = new Circle(15);
circle2.draw();

/**
 * If we want to create many objects to access draw method like above example, we have to keep large number of these objects in the memory.
 * It will going to waste a lot of memory by keeping copies of all these methods.
 * Solution for this is use prototypical inheritance.
 * When we access method or property on an object, Javascript engine will first looks at the object it self.
 * If it cannot find that property or the method, it will look at the prototype of that object.
 * So we can take out the draw method out of the Circle object and put it in its prototype.
 * Then it will have a single instance of this prototype in the memory which we call circle base.
 * So we are going to have a single instance of the draw method.
 */

// Example

function CircleProto(radius) {
  // Instance members
  this.radius = radius;

  this.move = function () {
    // Instance method
    this.draw();
    console.log("move");
  };
}

// Prototype members
CircleProto.prototype.draw = function () {
  console.log("draw");
};

CircleProto.prototype.toString = function () {
  return "Circle with radius " + this.radius;
};

let c1 = new CircleProto(20);
console.log(c1.toString());
c1.move();
