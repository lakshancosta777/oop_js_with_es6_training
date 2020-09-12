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

// Object.keys only returns instance members
console.log(Object.keys(c1));

// Return all members (instance + prototype)
for (const key in c1) {
  if (c1.hasOwnProperty(key)) {
    console.log("Own property : " + key);
  } else {
    console.log("Not own property : " + key);
  }
}
