// Step 1
// myForEach([0, 1, 2], function(value, index) {
//     console.log(value, this[index] === value /* should be true */);
//   });

//   function myForEach(arr, callback) {
//     // implement me
//     for(let i = 0; i < arr.length; i++) {
//         callback.call(arr, arr[i], i);
//     }
//   } 

  Array.prototype.myForEach = function myForEach(callback) {
    // implement me
    for(let i = 0; i < this.length; i++) {        
        callback(this[i]);
    };
  };
  
// Step 2 - Make this work
  [0, 1, 2].myForEach(function(value) {
    console.log(value);
  });