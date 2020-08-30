function Circle(radius) {
  this.radius = radius;
  let defaultLocation = { x: 0, y: 0 };
  let computeOptimumLocation = function (factor) {
    // ...
  };
  this.draw = () => {
    computeOptimumLocation(0.1);
    console.log("draw");
  };

  /**
   * The static method Object.defineProperty() defines a new property directly on an object, 
   or modifies an existing property on an object, and returns the object.
   */
  Object.defineProperty(this, "defaultLocation", {
    get: function () {
      return defaultLocation;
    },
    set: function (value) {
      if (!value.x || !value.y) {
        throw new Error("Invalid location");
      } else {
        defaultLocation = value;
      }
    },
  });
}

const circle = new Circle(10);
circle.draw();
circle.defaultLocation = { x: 3, y: 5 }; // Setting value
console.log(circle.defaultLocation); // Getting value
