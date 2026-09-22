
//  one m issing noumber find
const data2 =[3,1,5,7,9]
// const data = [1,2,4,5]
const data1 = new Set(data2)
console.log(data.has(5))

function missingno (n){
    let len = n.length+1
    let form = len*(len+1)/2
    let sum = n.reduce((a,b)=>a+b,0)
    return form - sum 
    
}
console.log(missingno(data2))


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

// without inbuild method
// const data = [22, 3, 1, 4, 2, 433, 2, 45];

function secondLarge(a) {
  let min = a[0];
  let max = a[0];
  let res = [];

  for (let i = 0; i <= a.length - 1; i++) {
    if (a[i] < min) {
      min = a[i];                                         
    }
    if (a[i] > max) {
      max = a[i];
    }
  }

  for (let j = min; j <= max; j++) {
    let dub = true;
    for (let k = 0; k <= a.length - 1; k++) {
      //  console.log(a[k],j)
      if (a[k] == j) {
        dub = false;
        break;
      }
    }
    if (dub) {
      res.push(j);
    }
  }

  return res;
}
console.log(secondLarge(data));




// best taraeka
// const data2 = [3, 1, 5, 6, 9];

function missingno (n){
 n.sort((a,b)=>a-b)
 let miss =[]
 
 
 for(let i=0; i<=n.length-1 ;i++){
     let diif = n[i+1]- n[i]
    //  console.log(diif)
     if(diif>1){
         for(let j=1; j<diif ;j++){
            //  console.log(j)
            miss[miss.length]=  n[i]+j
         }
     }
     
 }
 return miss
    
}
console.log(missingno(data2))


