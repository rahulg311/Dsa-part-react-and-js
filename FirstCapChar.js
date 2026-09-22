

const data = "my name is rahul";

function revers (a){

  
    let words =[]
     let word =""
    for(let i=0; i<=a.length-1; i++){
        if(a[i]===" "){
            words.push(word)
            word =""
        }else{
           word+=a[i]
        }
        
    }
    words.push(word)
      
     
      let res =""
    for(let i=0; i<=words.length-1; i++){
        //  console.log(a[i])
      res +=words[i].charAt(0).toUpperCase() + words[i].slice(1)
      if(i<words.length-1) res += "-"
        
    }
    return res
   

}
console.log(revers(data)) // 






// const s1 = "javaScript";
// const s2 = s1.replace(/^./, char => char.toUpperCase());
// console.log(s2);




// const s1 = "javaScript";
// const s2 = s1.charAt(0).s1.slicetoUpperCase() + (1);
// console.log(s2);




// without in build method



// const data = "my name is rahul";



function kebabCaseCapitalize(str){
    let res = "";
    let makeCap = true;   // अगला char capitalize होगा

    for(let i=0; i<str.length; i++){
        let ch = str[i];

        if(ch === " "){
            res += "-";
            makeCap = true;   // space के बाद next char capital होगा
        } else {
            if(makeCap && ch >= "a" && ch <= "z"){
                // small → capital (ASCII trick)
                res += String.fromCharCode(ch.charCodeAt(0) - 32);
            } else {
                res += ch;
            }
            makeCap = false;
        }
    }
    return res;
}

console.log(kebabCaseCapitalize(data)); 
// 👉 "My-Name-Is-Rahul"

// 👉 "My-Name-Is-Rahul"
