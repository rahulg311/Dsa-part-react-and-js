const data = [4, 1, 3, 5, 76, 8, 5, 3];
let min = Math.min(...data);
let max = Math.max(...data);
let length = max - min + 1;

// Create a reference array containing all numbers between min and max
const refrence = Array.from({ length }, (value, index) => min + index);

// Find the missing elements by comparing referenceArray with data
const missingData = refrence.filter((num) => !data.includes(num));
console.log(missingData.length);
console.log(missingData);

//  pure javascript
var a = [8, 2, 36, 6, 5];
let mins = Math.min(...a);
let maxs = Math.max(...a);

var missing = [];

for (let i = mins; i < maxs; i++) {
  // console.log(i)
  if (!a.includes(i)) {
    missing.push(i);
  }
}
console.log(missing);

// or
var a = [8, 2, 36, 6, 5];
let mi = Math.min(...a);
let ma = Math.max(...a);

var missing = [];

for (let i = mi; i < ma; i++) {
  let found = false;

  for (let j = 0; j < a.length; j++) {
    if (a[j] === i) {
      found = true;
      break;
    }
  }
  if (!found) {
    missing.push(i);
  }
}

console.log(missing);

// Charecter missing
const datas = ["a", "f", "c", "d"];

function findMissingLetters(datas) {
  const result = [];

  for (let i = 0; i < datas.length - 1; i++) {
    const currentChar = datas[i].charCodeAt(0);
    const nextChar = datas[i + 1].charCodeAt(0);

    for (let j = currentChar + 1; j < nextChar; j++) {
      result.push(String.fromCharCode(j));
    }
  }

  return result;
}

const missingLetters = findMissingLetters(datas);
console.log(missingLetters); // Output: [ 'b', 'e' ]

// second method ------------------
// const datas = ["a", "f", "c", "d"];
let miss = [];

const asciiValues = datas
  .map((char) => char.charCodeAt(0))
  .sort((a, b) => a - b);

let first = asciiValues[0];
let last = asciiValues[asciiValues.length - 1];

for (let i = first; i <= last; i++) {
  if (!datas.includes(String.fromCharCode(i))) {
    miss.push(String.fromCharCode(i));
  }
}
console.log(miss);
//   console.log(asciiValues[0] , asciiValues[asciiValues.length-1],asciiValues)
