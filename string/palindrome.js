//  method 1 for loop

let S = "bba"
let str =""
for(let i=S.length-1; i>=0; i--){
    str +=S[i]
}

if(S===str){
    console.log(true)
}else(
    console.log(false)
    )
console.log(str)

// 2 method

let p = S.split('').reverse().join('')
if(S===p){
   console.log(true) 
}else{
    console.log(false)
}


//  find string is palindrome without using method;

function palindrome(str){
    let len=str.length;
    for (let i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - 1 - i]) {
            return false
        }
    }
    return true
}
console.log("Welcome to Programiz!",palindrome("tet"));


// more  important  without string 121
function isPalindromeNumber(num) {
    // If the number is negative, it cannot be a palindrome
    if (num < 0) return false;

    // Initialize the reversed number and original number
    let original = num;
    let reversed = 0;

    // Loop to reverse the number
    for (; num > 0; num = Math.floor(num / 10)) {
        let digit = num % 10;
        reversed = reversed * 10 + digit;
    }

    // Check if the original number is equal to the reversed number
    return original === reversed;
}

// Test the function
let number = 121;
console.log(isPalindromeNumber(number)); // true




const data = "rahul aba dad abccba spple kaakkaak"
let spldata= data.split(' ')
let actdata =[]


for(let i=0; i<spldata.length; i++){
    let word =spldata[i]
    let reverword =""
    for(let j=word.length-1; j>=0; j--){
        
        reverword +=word[j]
        }
    if(reverword==word){
        if(word.length>actdata.length){
            actdata =word
        }
        
    }}
    console.log(actdata)
