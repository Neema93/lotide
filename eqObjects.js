const eqObjects = function(object1, object2) {
  if(Object.keys(object1).length !== Object.keys(object2).length){
    return false;
  }
  for(const key of Object.keys(object1)){
    if(object1[key] !== object2[key]){
       return false
    }
    if (object1[key].length !== object2[key].length) {
        return false;
      } else {
        for (let i = 0; i < object1[key].length; i++) {
          if ( object1[key][i] !== object2[key][i]) {
            return false;
          }
        }
        return true;
    }
  }
  return true;
};
const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log("✅✅✅Assertion Passed: "+actual+" === "+expected);
    } else {
      console.log("🛑🛑🛑Assertion Failed: "+actual+" !== "+expected);
    }
};
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false