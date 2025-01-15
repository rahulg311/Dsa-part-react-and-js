
const data = {
    name:"rahul",
    age:"34",
    addres:"delhi"

}
let arra =[]
for(let key in data){
    
    if(data.hasOwnProperty(key)){
        arra =arra.concat(key, data[key])
    }
}
console.log(arra)

// -----------2nd method------------

for(let key in data){
    arra.push(key)
    arra.push(data[key])
    
    if(data.hasOwnProperty(key)){
        arra =arra.concat(key, data[key])
    }
}
console.log(arra)



// -----------3nd method------------

let val = Object.entries(data)
let va = val.flat()
console.log(va)