/**
 * Value Types (Primitives)
 * => Number
 * => String
 * => Boolean
 * => Symbol (ES6)
 * => undefined
 * => null
 */

/**
 * Reference Types (Objects)
 * => Object
 * => Function
 * => Array
 */

// Difference between primitive types and object types

// First we consider about primitives
let px = 10;
let py = x;

px = 20;

console.log(px); // 20
console.log(py); // 10

/**
 * According to above example we can see value of x is copied to y.
 * Once we change the value of x we can see it will not affect on y's value.
 * x,y two independent variables
 */

// No we will look into object (reference) types

let ox = { value: 10 };
let oy = ox;

x.value = 20;

onsole.log(ox.value); // 20
console.log(oy.value); // 20

/**
 * When we use an object, that object is not stored in this ox variable.
 * That object is stored in somewhere else in the memeory, and the address of the memory location is stored inside that variable.
 * And then when we copy x in to y what will happen is, the address or reference to memory location of x is getting copied to y.
 * In other words both x and y are getting pointed to the same object in the memory.
 * And when we modify each object using either x or y our changes are immediately visible to other variable.
 */

/**
 * Conclution
 * => Primitives are copied by their value
 * => Objects are copied by their reference
 */

// Example 1

let number = 10;

function increase(number) {
  number++;
}
increase(number);
console.log(number);

/**
 * Output => 10
 * Both number variables which are inside and the outside of the function are two differenct independent variables.
 * Thats why we can see 10 as the output
 */

// Example 2

let obj = { value: 10 };

function increase(obj) {
  obj.value++;
}
increase(obj);
console.log(obj.value);

/**
 * Output => 11
 * We can see the outout as 11. The reason for this is because when we call the increase function and pass the object, this object -
 * - is passed by its reference.
 * The method local variable also will point to the same object that what we defined above.
 * In this case we are not dealing with two independent copies, we have two variables that are pointing to the same object.
 * So any changes to this object is visible to the other variable.
 */
