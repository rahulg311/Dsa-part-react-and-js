// rotaed is the one element of reverse 
const data= [4,5,6,3,8,9]
// output = 9,8,3,6,5,4
// positionsToRotate is the kitne baar reverse hoga


// Example usage:
const originalArray = [4,3,2,5,7,8];
const positionsToRotate = 2;

function rotateArray(aarry, pos){
  let  result1 =aarry.slice(-pos).concat(aarry.slice(0,-pos))
  return  result1
}

const rotatedArray = rotateArray(originalArray, positionsToRotate);
console.log(rotatedArray); // Output:[ 7, 8, 4, 3, 2, 5 ]