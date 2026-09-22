// JavaScript me polyfill ek aisa code ya script hota hai jo purane browsers me naye features ko support 
// karne ke liye likha jata hai. Matlab agar aap koi modern JavaScript feature use kar rahe ho
//  (jaise Array.prototype.flat(), fetch(), ya Promise), lekin user ka browser us feature ko support
//  nahi karta, to polyfill us feature ka custom implementation provide karke code ko work karne layak
//  banata hai.

// Example:

// Maan lijiye aap Array.prototype.flat() use karna chahte ho (jo arrays ko flatten karta hai):

// let arr = [1, [2, [3, 4]]];
// console.log(arr.flat()); // modern browser me work karega


// Agar koi purana browser flat() support nahi karta, to aap polyfill use kar sakte ho:

// if (!Array.prototype.flat) {
//   Array.prototype.flat = function(depth = 1) {
//     return this.reduce((acc, val) => 
//       acc.concat(Array.isArray(val) && depth > 1 ? val.flat(depth - 1) : val), []
//     );
//   };
// }

// let arr = [1, [2, [3, 4]]];
// console.log(arr.flat()); // Ab ye purane browser me bhi work karega

// Mostly used for ES6+ features: Promise, fetch, Array methods, Object methods, etc.