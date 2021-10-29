const words = ["ground", "control", "to", "major", "tom"];
const map = function(array, callback) {
    const results = [];
    for (let item of array) {
        results.push(callback(item));
      }
    return results;
  }
  const assertArrayEqual = function(actual, expected) {
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
const results1 = map(words, word => word[0]);
console.log(results1);
console.log(assertArrayEqual(results1,['g','c','t','m','t']))
