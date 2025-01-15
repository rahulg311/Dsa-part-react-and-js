function rotateArray(arr, k) {
    let arrays= []
    for(let i=0; i<arr.length; i++){
         for(let j=0; j<=arr.length-1; j++){
             if(arr[i] +arr[j]==k){
                 arrays.push([arr[i] ,arr[j]])
              }} }
    return arrays
}

// Example usage
let arr = [4, 5, 1, 2, 3];
let k = 5;
let rotatedArr = rotateArray(arr, k);
console.log(rotatedArr); // Output: [4, 5, 1, 2, 3]