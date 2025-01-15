 // step 1   all word reverse useing for loop 
// example = "Write Edit and Run your Javascript code using JS Online

const data = "Write Edit and Run your Javascript code using JS Online";

// Split the string into an array of words
const wordsArray = data.split(' ');

// Initialize an empty array to store the reversed words
const reversedWords = [];

// Loop through the words in reverse order
for (let i = wordsArray.length - 1; i >= 0; i--) {
  reversedWords.push(wordsArray[i].split("").reverse().join(''));
}

// Join the reversed words to form a new string
const reversedData = reversedWords;

console.log(reversedData);



 // step 2   all word reverse useing for  javascript method 

 let rev = data.split(' ').reverse().map((item)=> {return item.split('').reverse().join("")})
 console.log(rev.join(" "))


//  step 3  string reverse
const word = "Write ";

let rev1 = word.split('').reverse().join("")

console.log(rev1);

