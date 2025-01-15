// To find the median of the array [5, 3, 9, 1, 7, 2], follow these steps:

// Sort the array: [1, 2, 3, 5, 7, 9]
// Find the median:
// If the array has an odd number of elements, the median is the middle element.
// If the array has an even number of elements, the median is the average of the two middle elements.
// Since the array has an even number of elements (6), the median will be the average of the 3rd and 4th elements in the sorted array.

// So, the median is 
// (
// 3
// +
// 5
// )
// /
// 2
// =
// 4
// (3+5)/2=4.

// Let's write a JavaScript function to calculate this:


const data = [5, 3, 9, 1, 7, 2];

let len =data.sort((a, b) => a - b);

const mid = Math.floor(len.length / 2);
const median = len.length % 2 !== 0 ? data[mid] : (data[mid - 1] + data[mid]) / 2;

console.log(median); // Output: 4
// This code will correctly compute and display the median of the array.




// ------------or______--------------

// const data = [5,3,9,1,7,4];
let sorts = data.sort((a,b)=>a-b)
let index = Math.floor(sorts.length/2)
if(sorts.length%2==0){
    let mid = (data[index]+data[index-1])/2
    console.log(mid)
    
}else{
     console.log(index)
}




// const data = [5,3,9,1,7];
// let sorts = data.sort((a,b)=>a-b)
// let mid = Math.floor(sorts.length/2)

// let mindain =sorts.length%2===0? (sorts[mid] +sorts[mid-1] )/2 :sorts[mid]
// console.log(mindain)
