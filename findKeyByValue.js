const bestTVShowsByGenre = { 
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  };
  const findKeyByValue = function(obj , value){
    return Object.keys(obj).find(key => obj[key] === value);
  
  }
  const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log("✅✅✅Assertion Passed: "+actual+" === "+expected);
    } else {
      console.log("🛑🛑🛑Assertion Failed: "+actual+" !== "+expected);
    }
  };
  
  assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);ø