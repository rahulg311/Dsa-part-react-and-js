const data = "acsaadchgsguyhyghg"

function countNo (a,b){
    let cc = 0
    for(let i=0; i<=a.length-1 ;i++){
        if(b ==a[i]){
      
          cc++
        }
    }
    return cc
    
}
console.log(countNo(data, "g"))
//  output 4


