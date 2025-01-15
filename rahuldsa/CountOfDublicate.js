//  setep 1 no of count deublicate no
const duplicate = [3, 45, 2, 5, 2, 3, 5, 4];
let count ={}
for(let data of duplicate){
   if(count[data]){
       count[data]++
       }else{
            count[data]=1
       }
}
console.log(count)

// or
const duplicate2 = ["s","d","d","a","c","a"];
let count2 ={}
for(let data of duplicate){
   if(count2[data]){
       count2[data]++
       }else{
            count2[data]=1
       }
}
console.log(count2)


//  count name is array of object
const duplicates = [{name:"aman"},{name:"rahul"},{name:"aman"},{name:"rahul"},{name:"rahul"},{name:"pawan"}];
let counts =[]
for(let data in duplicates){
    console.log(duplicates[data].name)
   if(counts[duplicates[data].name]){
       counts[duplicates[data].name]++
       }else{
            counts[duplicates[data].name]=1
       }
}
console.log(counts)

// setp 3
const duplicate4 = [{ name: "aman" }, { name: "rahul" }, { name: "aman" }, { name: "rahul" }, { name: "rahul" }, { name: "pawan" }];
let count3 = {};

duplicate.forEach(item => {
    const name = item.name;
    count3[name] = (count3[name] || 0) + 1;
});

console.log(count3);