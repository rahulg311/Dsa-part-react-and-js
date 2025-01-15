const data = "aabcccccaaa";
let countdata = {}; // Initialize an empty object

for (let i = 0; i < data.length; i++) {
    let char = data[i];
    
    if (!countdata[char]) {
        countdata[char] = 1; // If the character doesn't exist in countdata, initialize its count to 1
    } else {
        countdata[char]++; // If the character already exists in countdata, increment its count
    }
}

console.log(countdata); // Output the countdata object


//  word cont number 
// const data = "rahul gupta rahul kumar kumar"

const sp = data.split(" ")
const em =  {}

for(let i=0; i<sp.length-1;i++){
    let dd =sp[i]
    if(em[dd]){
        em[dd]++
    }else{
         em[dd] = 1
    }
    
}
console.log(em)


//  or-----------
// const data = [5,3,9,1,7,2,5,3];
// const data = ["a","b","s","a","f","s","f"];
let obj={}



for(let key of data){
    // console.log(key)
     obj[key] =(obj[key]||0)+1
}
console.log(obj)


// how to key counut max 
// const data = ["a","b","s","a","a","f","s","f"];
// let obj={}
let msx= 0



for(let key of data){
    // console.log(key)
     obj[key] =(obj[key]||0)+1
     if(obj[key]>msx){
         msx =obj[key] // value add
         msx =key  // key add
     }
}
console.log(msx)