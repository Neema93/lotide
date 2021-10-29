const without = function(actual, differnt) {
  let arr = [];
  for (let i = 0; i < actual.length; i++) {
    if (differnt[i] !== actual[i]) {
      arr.push(actual[i]);
    }
  }
  console.log(arr);
};
const assertArraysEqual = function(actual, expected) {
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
};
without([1, 2, 3], [1]); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
console.log(assertArraysEqual(words, ["hello", "world", "lighthouse"]));