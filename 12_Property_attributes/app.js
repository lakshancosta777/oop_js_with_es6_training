let person = { name: "lakshan" };
let objectBase = Object.getPrototypeOf(person);
let descriptor = Object.getOwnPropertyDescriptor(objectBase, "toString");
console.log(descriptor);

/**
 * Output =>
 * {writable: true, enumerable: false, configurable: true, value: ƒ}
    configurable: true // We can delete this member if we want to
    enumerable: false // Not visible for the iteration
    value: ƒ toString() // default implementation of toString method
    writable: true // We can over write this method. We can change its implementation then set its value.
    __proto__: Object
 */

let vehicle = { type: "car" };
Object.defineProperty(vehicle, "type", {
  writable: false, // Cannot modify or over write this property
  enumerable: true, // Visible for iteration
  configurable: false, // Cannot be deleted
  value: "van", // Override the property value
});

vehicle.type = "bus";
console.log(vehicle.type);
// Output => van
// Which is set from the value attribute. and it was not modified once set writeable set to false

console.log(Object.keys(vehicle));
// Output => ["type"]
// It will not visible in Object.keys once enumerable set to false.

delete vehicle.type;
console.log(vehicle.type);
// Output => van
// Property cannot be deleted once configurable is set to false
