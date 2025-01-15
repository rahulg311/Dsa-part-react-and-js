function rotateArray(arr, k) {
    k = k%arr.length
    for(let i=0 ; i<k; i++){
       arr.unshift(arr.pop(k))
   }
     return arr
 }

// Example usage
// let arr = [1, 2, 3, 4, 5];
// let k = 4;
// let rotatedArr = rotateArray(arr, k);
console.log(rotatedArr); // Output: [4, 5, 1, 2, 3]



// ----------------------
function rotateArray(arr, k) {
    k = k % arr.length; // To handle cases where k > arr.length
    return arr.slice(-k).concat(arr.slice(0, -k));
}

// Example usage
let arr = [1, 2, 3, 4, 5];
let k = 2;
let rotatedArr = rotateArray(arr, k);
console.log(rotatedArr); // Output: [4, 5, 1, 2, 3]