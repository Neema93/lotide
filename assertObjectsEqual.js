const assertObjectsEqual = function(object1, object2) {
    if(Object.keys(object1).length !== Object.keys(object2).length){
        console.log("🛑🛑🛑Assertion Failed: "+object1+" !== "+object2);
    }
    for(const key of Object.keys(object1)){
      if(object1[key] !== object2[key]){
        console.log("🛑🛑🛑Assertion Failed: "+object1+" !== "+object2);
      }
      if (object1[key].length !== object2[key].length) {
        console.log("🛑🛑🛑Assertion Failed: "+object1+" !== "+object2);
        } else {
          for (let i = 0; i < object1[key].length; i++) {
            if ( object1[key][i] !== object2[key][i]) {
                console.log("🛑🛑🛑Assertion Failed: "+object1+" !== "+object2);
            }
          }
          console.log("✅✅✅Assertion Passed: "+object1+" === "+object2);
      }
    }
    console.log("✅✅✅Assertion Passed: "+object1+" === "+object2);
  };
 
  const ab = { a: "1", b: "2" };
  const ba = { b: "2", a: "1" };
  //console.log(eqObjects(ab, ba)); // => true
  assertObjectsEqual(ab , ba);
//   const abc = { a: "1", b: "2", c: "3" };
//   console.log(eqObjects(ab, abc)); // => false
//   const cd = { c: "1", d: ["2", 3] };
//   const dc = { d: ["2", 3], c: "1" };
//   console.log(eqObjects(cd, dc)); // => true
  
//   const cd2 = { c: "1", d: ["2", 3, 4] };
//   console.log(eqObjects(cd, cd2)); // => false