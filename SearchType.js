function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i; // element mil gaya
    }
  }
  return -1; // nahi mila
}

console.log(linearSearch([10, 20, 30, 40, 50], 30)); // Output: 2
console.log(linearSearch([10, 20, 30, 40, 50], 70)); // Output: -1





// 🔎 2. Binary Search

// Ye sorted array ke liye hota hai.

// Array ko middle element se divide karte h, aur check karte h ki element left side me h ya right side me.

// Har step me array half ho jata hai.

// Time Complexity → O(log n)

// Example:
function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) {
      return mid; // element mil gaya
    }
    else if (arr[mid] < target) {
      start = mid + 1; // right side me search
    }
    else {
      end = mid - 1; // left side me search
    }
  }

  return -1; // nahi mila
}

console.log(binarySearch([10, 20, 30, 40, 50], 40)); // Output: 3
console.log(binarySearch([10, 20, 30, 40, 50], 70)); // Output: -1




console.log([1,2,3,4,5].indexOf(3)); // 2