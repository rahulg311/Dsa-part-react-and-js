
//  only one uniqe valye presnt then this code work 
const data = [3, 3, 1, 4, 1];

function uniqdata(arr) {
  let unq = 0;

  for (let i = 0; i < arr.length; i++) {
    unq = unq ^ arr[i];
  }

  return unq;
}

console.log(uniqdata(data));


//  other

function uniqdata(arr) {
  let res = [];

  for (let i = 0; i < arr.length; i++) {
    let count = 0;

    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        count++;
      }
    }

    if (count === 1) {
      res.push(arr[i]);
    }
  }
  return res;
}


// inbuild method 
function uniqdata(arr) {

let ff = arr.filter((v,k,arr)=>arr.indexOf(v) == arr.lastIndexOf(v))
 return ff
}

console.log(uniqdata(data));