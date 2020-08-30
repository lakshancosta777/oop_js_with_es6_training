/**
 * Abstraction is the concept of exposing only the essentials to the public.
 * Hide all the unnecessary complexity on the outside, and expose only a few members to outside
 * This concept will hepls to avoid many codeing issues like, when requred to add an parameter to a function which is inside an object.
 * Without abstraction concept, most likely you should have modify each of every place where you have called this function.
 * It means one simple change make number of changes to your source code.
 * If this method was not accessible to outside, we would not have to modify all the places.
 */

/**
 * color is a local variable and it is not part of the Circle object unless it is declared this.color
 * When we get out of this function color variable goes of of the scope and dies.
 * With this technique we can easily hide certain members from the outside.
 */
function Circle(radius) {
  // let color = "red";
  // this.color = "red"

  this.radius = radius;

  // Declaring private members
  let defaultLocation = { x: 0, y: 0 };
  let computeOptimumLocation = () => {
    // ...
  };
  this.draw = () => {
    let x, y;
    computeOptimumLocation(0.1);
    console.log("Draw");
  };
}

/**
 * Concept of closure
 * In above example we have one constructor function Circle and another function (draw) inside that function.
 * In draw function we can declare certain variables like x, y.
 * They are local variables which is only available in this function and their scope is limited to this function.
 * Once we executing the function x and y will go out of scope.
 * In contrast to the scope we have closure, a closure determines what variables will be accessible to an inner function
 * So draw function will be accessible to access all the local variables defined inside the function and the variables defined in its parent function.
 * They are within the scope of this function but within the closure of this inner function.
 * Scope is temporary and it dies. Each of every time when we call draw method, thse variables will be created and re initialized. And after the function they wll die.
 * So scope is temporary but closure stays.
 */

const circle = new Circle(2);
// circle.radius;
// circle.draw;
// Only visible to outside.

// Closur Examples
//Returning value form inner function
var buttons = document.querySelectorAll(".btn");
console.log(buttons);
for (let index = 0; index < buttons.length; index++) {
  const element = buttons[index];
  element.addEventListener("click", function (e) {
    reportClickActivities(e.target.id);
  });
}

function clicksCount() {
  let clicks = {};
  function reportClicks(item) {
    clicks[item] = clicks[item] + 1 || 1;
    console.log(item, clicks);
  }
  return reportClicks;
}

// Products
var products = document.querySelectorAll(".products");
products.forEach((el) => {
  el.addEventListener(
    "mouseenter",
    (event) => {
      reportClickHover(event.target.id);
    },
    false
  );
});

const reportClickActivities = clicksCount();
const reportClickHover = clicksCount();
