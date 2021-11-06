// TEST/ASSERTION FUNCTIONS
// emport assertArrayEqual and eqArrays
const assert = require('chai').assert;
const middle = require('../middle');
//const assertArrayEqual = require('../assertArrayEqual')

  // ACTUAL FUNCTION
  describe("#middle", () => {
    it("returns 2 for [1, 2, 3]", () => {
      assert.deepEqual(middle([1, 2, 3]), [2]);
    });
    it("returns '5' for ['6','5','4']", () => {
      assert.deepEqual(middle(['6','5','4']), ['5']); 
    });
  });
  //const middle = function(array) {
    //...
//     let data = [];
//     if(array.length === 1){
//         data.push([])
//     } else if(array.length === 2){
//         data.push([])
//     } else if(array.length % 2 === 0) {
//         let ans = array.length / 2;
//          data.push(array[ans-1]);
//          data.push(array[ans]);
//     } else if (array.length % 2 !== 0){
//         let ans = Math.floor(array.length / 2);
//         data.push(array[ans]);
//     }
//     return data;
//   }
  
  // TEST CODE
  // ...
//   console.log(middle([1]) + "\n" + middle([1, 2]));
//   console.log(middle([1, 2, 3]) + "\n" + middle([1, 2, 3, 4, 5]));
//   console.log(middle([1, 2, 3, 4]) + "\n" + middle([1, 2, 3, 4, 5, 6]));
//   console.log(eqArrays(middle([1, 2, 3]),[2]));
//   console.log(assertArrayEqual(middle([1,2,3,4]),[2,3]));