let data = [[3, 4, 58], [709, 8, 9], [10, 11], [111, 2]];


let largest = -Infinity; // Initialize with a very small value

let aar =[]

for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].length; j++) {
     
        aar.push(data[i][j])
      
    }
}
aar.sort((a,b)=>a-b)

console.log("The largest element is:",aar[aar.length-1]);



// let data = [3, [5, 7, [1, 10]], 2, [6, [8, 9]]];
let flattened = data.flat(Infinity); // Flatten to any depth
console.log(flattened); // Output: [3, 5, 7, 1, 10, 2, 6, 8, 9]






function flattenArray(nestedArray) {
    const flatArray = [];

    function flatten(arr) {
        for (let item of arr) {
            if (Array.isArray(item)) {
                flatten(item); // Recursively flatten nested arrays
            } else {
                flatArray.push(item); // Add non-array elements to flatArray
            }
        }
    }

    flatten(nestedArray);
    return flatArray;
}

// Example usage
const nestedArray = [1, [2, [3, 4], 5], [6, 7], 8];
// const flattened = flattenArray(nestedArray);
console.log(flattened); // Output: [1, 2, 3, 4, 5, 6, 7, 8]

