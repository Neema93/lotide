const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("✅✅✅Assertion Passed: "+actual+" === "+expected);
  } else {
    console.log("🛑🛑🛑Assertion Failed: "+actual+" !== "+expected);
  }
};
const countLetter = function(words) {
  const results = {};
  for (const item of words) {
  //console.log(item);
    if (results[item] !== undefined) {  
      results[item] += 1;
    } else {
      results[item] = 1;
    }    
  }
  return results;
};
console.log(countLetter("lighthouselabs")); 
