const tail = function(value) {
  const ans = [];  
  for (let i = 1; i < value.length; i++) {
    ans.push(value[i]);
  }
  return ans;
};
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("✅✅✅Assertion Passed: " + actual + " === " + expected);
  } else {
    console.log("🛑🛑🛑Assertion Failed: " + actual + " !== " + expected);
  }
};
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]); 
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(tail(words).length, 3);