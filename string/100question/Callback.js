
const myNumbers = [4, 1, -20, -7, 5, 9, -6];

function removeNeg(numbers, callback) {
  const myArray = [];
  for (const x of numbers) {
    if (callback(x)) {
      myArray.push(x);
    }
  }
  return myArray;
}

function callback (val){
   
    let res = val >=0
    //  console.log(res)
    return res
    
}

console.log(removeNeg(myNumbers ,callback))