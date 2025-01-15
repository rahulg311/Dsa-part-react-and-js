function reverseNumber(num) {
    let reversed = 0; // Reverse number ko initialize kiya 0 se
    while (num !== 0) { // Jab tak number 0 nahi hota, loop chalayenge
        let lastDigit = num % 10; // Last digit nikalte hain
        reversed = reversed * 10 + lastDigit; // Reverse number ko update karte hain
        num = Math.floor(num / 10); // Original number ko update karte hain
    }
    return reversed; // Final reversed number return karte hain
}
console.log(reverseNumber(1234))
