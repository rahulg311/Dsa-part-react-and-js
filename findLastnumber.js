// const data = "abcgdd"
let rsc =0
console.log(data % 100)


const data = 12345;
const dataString = data.toString();
const lastTwoDigits = dataString.slice(-4);
console.log(lastTwoDigits); // Output will be "45"


//  find first 2 digt
// const data = 12345;
const firstTwoDigits = Number(data.toString().slice(0, 2));
console.log(firstTwoDigits); // Output: 12



// const data = "abcgdd";
let last = "";

for (let i = data.length - 1; i >= data.length - 2; i--) {
    last += data[i];
}

console.log(last); // Output: "dd"


// or
console.log(data.slice(-2))
