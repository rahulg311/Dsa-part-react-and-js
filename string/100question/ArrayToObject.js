const data = [2, 4, 2, 65, 7, 4, 8];
const val = data.map((item, i)=>[i, item])
let obj= Object.fromEntries(val)
console.log(obj)

// -----------2nd method -------------
// const data = [2, 4, 2, 65, 7, 4, 8];
// let obj ={}
for(let i =0; i<=data.length-1; i++){
   obj[i]=data[i]
   
    
}
 console.log(obj)