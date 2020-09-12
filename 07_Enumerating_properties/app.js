function Circle(radius) {
  this.radius = radius;
  this.draw = () => {
    console.log("Draw");
  };
}

const circle = new Circle(10);

/**
 * This apporach will return all the properties but not the functions.
 * Once remove the if statement, it will return all keys in the object
 */
for (let key in circle) {
  if (typeof circle[key] !== "function") {
    console.log(key, circle[key]);
  }
}

// Getting all the keys in an object
/**
 * This will return all keys of an object in an array
 * With this approach cannot separate properties from methods
 */
const keys = Object.keys(circle);
console.log(keys);

// Check whether an object has a given property
if ("radius" in circle) {
  console.log("Circle has a radius");
}
