const data =[3,4,2,4,2,2]
const data2 =[3,4,2,4,2,1]
// console.log(JSON.stringify(data)==JSON.stringify(data2))

function abbsb(a,b){
    if(a.length!=b.length) return false
    return a.every((curr, index)=>curr=== b[index])
    
}
console.log(abbsb(data, data2))