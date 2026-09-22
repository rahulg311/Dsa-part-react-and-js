
// A prime number is a natural number greater than 1 that has exactly two factors:

// 1

// Itself

// This means a prime number cannot be divided evenly by any number other than 1 and itself



let primeno =[]
function data(z){
     let prime = true
   for(let i=2 ; i<z; i++){
          if(z%i==0){
               prime = false
        }
    }
    
  return prime
}

for(let i=20 ; i<50; i++){
    if(data(i)){
        primeno.push(i)
    }
 
 
 
    
}
console.log(primeno)