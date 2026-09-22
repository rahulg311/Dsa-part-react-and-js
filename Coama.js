// JavaScript me comma operator multiple expressions ko evaluate karta hai,
// lekin return sirf LAST expression ka karta hai

let b =[3,1,5,6,9][ (3,4,2) ]
// (3,4,2) → 2

// [3,1,5,6,9][2] → 5


//  scenod  mtb jo coma k sth valeu o o last value hi return kerta h
let x = (10, 20, 30);
console.log(x); // 30


function test(a, b) {
  return a + b;
}

test((1,2), (3,4)); 
// test(2, 4) → 6

if ((x = 5, x > 3)) {
  console.log("TRUE"); // TRUE
}


const arr = [10,20,30,40];

arr[1,2,3]; // arr[3] → 40



const obj = {
  a: 1,
  b: 2
};

obj["a","b"]; // obj["b"] → 2



let a = 1;
// let b = (a++, a + 5);
// console.log(b); output 7


// Golden Rule (Yaad Rakho)

// Comma operator sab kuch evaluate karta hai,
// par return hamesha LAST value karta hai