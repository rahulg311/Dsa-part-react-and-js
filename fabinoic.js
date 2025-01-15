function generateFibonacci(n) {
    if (n <= 0) {
        return []; // Return an empty array for non-positive input
    }

    if (n === 1) {
        return [0]; // The first Fibonacci number
    }

    // Initialize the Fibonacci sequence with the first two terms
    let fibonacci = [0, 1];

    // Generate the sequence up to n terms
    for (let i = 2; i < n; i++) {
        fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
    }

    return fibonacci;
}

// Example Usage
let terms = 10; // Specify the number of terms
let result = generateFibonacci(terms);
console.log(result); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
