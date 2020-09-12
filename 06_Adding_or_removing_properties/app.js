function Circle(radius) {
  this.radius = radius;
  this.draw = () => {
    console.log("Draw");
  };
}

const circle = new Circle(1);

/**
 * In JavaScript we can add properties to an existing object on the fly.
 */

circle.location = { x: 2, y: 4 };
console.log(circle.location);
// Output => {x: 2, y: 4}

// There is another way we could add a property to an exixting object
circle["color"] = { areaColor: "red", circleColor: "blue" };
console.log(circle.color);

/**
 * Output => {areaColor: "red", circleColor: "blue"}
 * . notation is simpler than using [] notation
 * [] is also useful in certain scenarios
 * Example :
 * => When you need to dynamically access a property name.
 * => When having a special character or a space in the property name
 */

// Dynamically access a property
const propertyName = [];
propertyName.push("diameter");
circle[propertyName[0]] = { diameter: circle.radius * 2 };
console.log(circle.diameter);
// Output => {diameter: 2}

// When having a special character or a space in the property name
propertyName.push("circle circumference");
circle[propertyName[1]] = { circumference: ((2 * 22) / 7) * circle.radius };
console.log(circle["circle circumference"]);
// Output => {circumference: 6.285714285714286}

// Delete property

delete circle.diameter;
delete circle["circle circumference"];
console.log(circle);
// Output => Circle {radius: 1, location: {…}, color: {…}, draw: ƒ}
// Two properties got deleted
