// Given a string S, find the length of the longest substring without repeating characters.
let  S = "geeksforgeeks"
let tem =""
 for(let i=0; i<S.length; i++){
    if(tem.indexOf(S[i])== -1){
        tem+=S[i]
        }
   }
console.log(tem.length) // output = geksfor

// 2 method

let data = new Set(S)
console.log(data) // output = geksfor



