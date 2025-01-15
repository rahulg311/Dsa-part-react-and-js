
const data ="Write Edit and Run your Javascript code using JS Online Compiler"


let  array =[]
let word =""
let logestword =""
for(let key of data){
    
    if(key == " "){
        array.push(word)
        word =""
        
    }else{
       word += key
    }
    
}
  array.push(word)
  for(let i =0; i<array.length-1; i++){

      if(logestword.length <array[i].length){
         logestword = array[i]
      }

  }
console.log(logestword)
