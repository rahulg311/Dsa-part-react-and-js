let data = [8, 4, 2, 6, 9, 3];

for (let i = 0; i < data.length - 1; i+=2) {
  console.log(i)
    let temp = data[i];
    data[i] = data[i + 1];
    data[i + 1] = temp;
}

console.log(data); // Output: [4, 2, 6, 8, 3, 9]


//  swap 2 number
let a = 5;
let b = 10;

console.log("Before swapping:");
console.log("a =", a);
console.log("b =", b);

// Switching the values
let temp = a;
a = b;
b = temp;

console.log("After swapping:");
console.log("a =", a);
console.log("b =", b);

// Another approach to swap variable values without using a third variable-
// Switching the values without a third variable
a = a + b;
b = a - b;
a = a - b;

console.log("After swapping:");
console.log("a =", a);
console.log("b =", b);




//  swap fiest and last element swap
let datas = [8, 4, 2, 6, 9, 3];
let first = data[0]
let last = data[data.length-1]
    data[0]= last;
  data[data.length-1]= first
  console.log(data)

  // Swapping variable values using destructuring assignment
let x = 5;
let y = 10;
[x, y] = [y, x];
console.log("x =", x); // Output: x = 10
console.log("y =", y); // Output: y = 5

