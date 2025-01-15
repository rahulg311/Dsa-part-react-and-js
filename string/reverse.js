//  methed one 
const str= "rahul";
const reversedStr = [...str].reverse().join("");
console.log(reversedStr) // = luhar  

//  methed two
const result = str.split('').reverse().join('')
console.log(result) // = luhar

// //  methed 3
const results = [...str].reduce((x, y) => y.concat(x));
console.log(results)

 //  methed 4 for loop

 function reves(str){
    let re =""
   for(let i=str.length-1; i>=0;i--){
     re += str[i]
    }
    return re
    
}
console.log(reves(str))

//  number revers 
const data = 12345
let rsc =0

function rev (keys){
    
    if(keys <=1){return 1}
    while(keys >0){
      //  last no find
    let last =  keys % 10 
     //  last no add
    rsc =rsc *10 +last
    //  last no remove in orifnal no
    keys = Math.floor(keys/10)
   }
    return  rsc
    
}
console.log(rev(data))