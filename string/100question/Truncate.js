
function TruncateString(key,num){
    let tr =""
   let spi =key.split("")
//   console.log(spi)
   for(let i=0; i<=spi.length-1; i++){
        // if(tr.length<=num){
        //      tr+=spi[i]
        //     }
        // ------ or -------
        if(i+1<=num){
             tr+=spi[i]
        }else{
            tr+="."
        }
         }

   return tr
  
   
 

}

console.log(TruncateString("abchhhd, jhahdh, hjdahdh",5))



// ------or------------------

function TruncateString(key,num){

    if(key.length>num){

        return key.slice(0, num).concat("...")
        
    }
}

console.log(TruncateString("abchhhd, jhahdh, hjdahdh",5))



