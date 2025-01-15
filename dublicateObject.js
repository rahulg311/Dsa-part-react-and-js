let data = [
    {name: "sai"},
    {name: "Nang"},
    {name: "sai"},
    {name: "Nang"},
    {name: "111111"}
];


let uniqueData = data.filter((item, index, self) => {
   let ss =  index === self.findIndex((t) => t.name === item.name)
  
   return ss
}
  
);
console.log(uniqueData)


//  second mentod dublicated value find 
// let data = [
//     {name: "sai"},
//     {name: "Nang"},
//     {name: "sai"},
//     {name: "Nang"},
//     {name: "111111"}
// ];

let seen = new Set();
let filteradta = data.filter((i)=>{
    if(seen.has(i.name)){
        return false
    }
    seen.add(i.name)
    return true
})

console.log(filteradta);

