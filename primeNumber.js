// 7. Write a JavaScript function to check if a given number is prime. 
function isPrime(number) {
    if (number <= 1) return false;
    for (let i = 2; i <= number / 2; i++) {
        if (number % i === 0) return false;
    }
    return true;
}   
// Example usage:
const num = 17;
console.log(`${num} is prime: ${isPrime(num)}`);