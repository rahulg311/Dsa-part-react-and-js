const org ="orignalJoinOrignalDataOrignal"


let word =""
let result=[]

for(let key of org){
    if(key ===key.toUpperCase()){
        result.push(word)
        word =key
        
    }else{
         word+=key
    }
    
}
if(word != ""){
    result.push(word)
}
console.log(result)



// const org ="orignal_Join_Orignal_Data_Orignal"


// let word =""
// let result=[]

// for(let key of org){
//     // console.log(key)
//     if(key ==="_"){
//         result.push(word)
//         word =""
        
//     }else{
//          word+=key
//     }
    
// }
// if(word != ""){
//     result.push(word)
// }
// console.log(result)




// cpatital first letter
// let str = "hello world";
// let result = str.split(' ')                                                              
//   .map(word => word[0].toUpperCase() + word.slice(1))
//   .join(' ');
// console.log(result); // "Hello World"


