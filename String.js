// find string is palindrome

function palindrome(str){
    let reStr=str.split("").reverse().join("");
    return str==reStr;
}
console.log("Welcome to Programiz!",palindrome("tet"));

// input - "tet" ,exp- "tet"=="tet", "test"=="tset"
// output - true


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

// input - "tet" ,exp- "tet"=="tet", "test"=="tset"
// output - true


// check repeated character in a string
function repeatStr(str){
    let obj={};
    for(let i of str){
        obj[i]=(obj[i]||0)+1
    }
    return obj
}
console.log("Welcome to Programiz!",repeatStr("test"));

// input - "test"
// output - { t: 2, e: 1, s: 1 }


// check two string is anagram

function anagram(str,str2){
    if(str.length!=str2.length) return false;
    let sortStr1=str.split("").sort().join("");
    let sortStr2=str2.split("").sort().join("");
    return sortStr1==sortStr2
}
console.log("Welcome to Programiz!",anagram("test","ttes"));

// input - "test" , "ttes";
// output - false 