const assertEqual = require('./assertEqual');
// FUNCTION IMPLEMENTATION
const head = function(value) {
  return value[0];
};
// TEST CODE
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
module.exports = head;