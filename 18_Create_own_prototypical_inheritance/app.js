function Shape() {}

function Circle(radius) {
  this.radius = radius;
}

Shape.prototype.duplicate = function () {
  console.log("Duplicate");
};

Circle.prototype.draw = function () {
  console.log("Draw");
};

// Circle.prototype = Object.create(Object.prototype); How it looks like previously
Circle.prototype = Object.create(Shape.prototype);

const s = new Shape();
const c = new Circle(10);

console.log(Object.getPrototypeOf(s)); // Inherited from Object Base
console.log(Object.getPrototypeOf(c)); // Inherited from Shape Base

/**
 * Inheritance heirachy
 * s => ShapeBase => ObjectBase
 * c => CircleBase => ShapeBase => ObjectBase
 */
