Array.prototype.shuffle = function () {};

const array = [];
array.shuffle();

/**
 * We should not modify the built in objects in JavaScript
 * Becase it is possible to modify built in objects in Javascript.
 * If you are going to use a library and in that libaray someone has also extended array prototype and added a shuffle method with a different implementation.
 * It will take your whole day to debug the brolem.
 *
 * DO NOT MODIFY OBJECTS YOU DO NOT OWN !!!
 *
 * Javascript is a dynamic language it make it really easy to add properties and methods to do that existing object, it does not
 * mean that you should modify the built in objects.
 *
 * Do not overwrite methods, do not add new methods or properties, do not remove existing properties or methods.
 */
