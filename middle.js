// TEST/ASSERTION FUNCTIONS
const eqArrays = function(actual, expected) {
    //...
    if (actual.length !== expected.length) {
        return false;
      } else {
        for (let i = 0; i < actual.length; i++) {
          if (actual[i] !== expected[i]) {
            return false;
          }
        }
        return true;
      }
  }
  const assertArraysEqual = function(actual, expected) {
    //...
    if (actual.length !== expected.length) {
        return "🛑🛑🛑Assertion Failed: " + actual + " !== " + expected;
      } else {
        for (let i = 0; i < actual.length; i++) {
          if (actual[i] !== expected[i]) {
            return "🛑🛑🛑Assertion Failed: " + actual + " !== " + expected;
          }
        }
        return "✅✅✅Assertion Passed: " + actual + " === " + expected;
      }
  }
  
  // ACTUAL FUNCTION
  const middle = function(array) {
    //...
    let data = [];
    if(array.length === 1){
        data.push([])
    } else if(array.length === 2){
        data.push([])
    } else if(array.length % 2 === 0) {
        let ans = array.length / 2;
         data.push(array[ans-1]);
         data.push(array[ans]);
    } else if (array.length % 2 !== 0){
        let ans = Math.floor(array.length / 2);
        data.push(array[ans]);
    }
    return data;
  }
  
  // TEST CODE
  // ...
  console.log(middle([1]) + "\n" + middle([1, 2]));
  console.log(middle([1, 2, 3]) + "\n" + middle([1, 2, 3, 4, 5]));
  console.log(middle([1, 2, 3, 4]) + "\n" + middle([1, 2, 3, 4, 5, 6]));