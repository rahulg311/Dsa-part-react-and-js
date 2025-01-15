//  find some no in aaray
let arr = [2,44,212,44,0,8,9,7,6,54,32,1]
let data=[]
for(let i=0; i<=arr.length; i++){
    if(arr[i]%2===0){
         data.push(arr[i]) 
        
    }}
    console.log("Welcome to Programiz!",data);


    // 2 method
    let arrs = [2, 44, 212, 44, 0, 8, 9, 7, 6, 54, 32, 1];
let evenNumbers = arrs.filter(number => number % 2 === 0);

console.log(evenNumbers);