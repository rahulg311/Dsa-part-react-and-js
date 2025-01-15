// Using parseInt():
const str = "42";
const intValue = parseInt(str, 10); // The second argument (base) specifies the radix (base 10 for decimal).
console.log(intValue); // Output: 42



// Using the unary plus + operator:
const intValue1 = +str  // plus + operator assumes base 10 by default.
console.log(intValue1); // Output: 42 