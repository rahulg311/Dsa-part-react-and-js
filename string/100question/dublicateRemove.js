const data =[2,3,5,2,54,2,4,3,2,23,4]
const data1 =["apple", "banana", "apple","pimepapply", "orange","pimepapply"]

let dub=[]
for(let i =0; i<data1.length-1; i++){
    if(!dub.includes(data1[i])){
      dub.push(data1[i])  
    }
}
console.log(dub)

