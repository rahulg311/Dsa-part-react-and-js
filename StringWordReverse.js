const data = "my name is rahul";

function reverseWords(str){
    let words = [];
    let word = "";
    // split manually
    for(let i=0; i<str.length; i++){
        if(str[i] === " "){
            words.push(word);
            word = "";
        } else {
            word += str[i];
        }
    }
    words.push(word); // last word add

    // reverse words manually
    let res = "";
    for(let i=words.length-1; i>=0; i--){
        res += words[i];
        if(i > 0) res += " ";
    }
    return res;
}

console.log(reverseWords(data)); 
// 👉 "rahul is name my"
