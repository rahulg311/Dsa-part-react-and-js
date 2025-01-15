function poer (a){
    let po =false
    for(let i=1; i<a; i++){
      if(2**i ===a)  {
          po = true
      }
     
    }
     return po
    
    
}
console.log(poer(7))