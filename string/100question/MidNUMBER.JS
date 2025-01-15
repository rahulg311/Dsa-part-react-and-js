const data = [22, 43, 2, 23, 44, 55];

// Find the start number
const startNumber = data[0];

// Find the end number
const endNumber = data[data.length - 1];

// Find the middle index
const middleIndex = Math.floor(data.length / 2);

// Get the middle element
const middleNumber = data[middleIndex];

console.log(`Start Number: ${startNumber}`);
console.log(`End Number: ${endNumber}`);
console.log(`Middle Number: ${middleNumber}`);