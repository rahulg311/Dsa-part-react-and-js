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
      res +=words[i]
      if(i<words.length-1) res += "-"
        
    }
    return res
   

}
console.log(revers(data)) // my-name-is-rahul