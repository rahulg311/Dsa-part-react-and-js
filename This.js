// // In JavaScript, this is a special keyword that refers to the
// //  object that is executing the current function. 
// // Its value is determined by how the function is invoked.




// 2. Object Method ke andar
// const user = {
//   name: "Rahul",
//   getName() {
//     console.log(this.name);
//   }
// };

// user.getName();

// Output:

// Rahul

// Yaha this → user object hai.

// Kyun?

// user.getName();

// . ke left side wala object (user) hi this ban jata hai.

// 3. Normal Function
// function test() {
//   console.log(this);
// }

// test();

// Browser me:

// window

// Strict mode me:

// "use strict";

// function test() {
//   console.log(this);
// }

// test();

// Output:

// undefined
// 4. Arrow Function

// Arrow function apna this nahi banata.

// Ye parent ka this use karta hai.

// const user = {
//   name: "Rahul",

//   getName() {
//     const print = () => {
//       console.log(this.name);
//     };

//     print();
//   }
// };

// user.getName();

// Output:

// Rahul

// Arrow function ne this ko getName se inherit kar liya.

// 5. Problem without Arrow Function
// const user = {
//   name: "Rahul",

//   getName() {
//     function print() {
//       console.log(this.name);
//     }

//     print();
//   }
// };

// user.getName();

// Output:

// undefined

// Kyun?

// Kyuki print() ek normal function call hai.

// Iska this user object nahi hoga.