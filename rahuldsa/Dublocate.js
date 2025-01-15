// setp 1 remove duplicate  value det method

const duplicate = [3, 45, 2, 5, 2, 3, 5, 2, 4];

// Create a Set from the array to automatically remove duplicates
const uniqueSet = new Set(duplicate);

// Convert the Set back to an array
const uniqueArray = Array.from(uniqueSet);

console.log(uniqueArray);



// setp 2 remove duplicate  value useing for loop

const duplicates = [3, 45, 2, 5, 2, 3, 5, 2, 4];
let data =[]

for(let i=0; i<=duplicates.length-1; i++){
    if(!data.includes(duplicates[i])){
        data.push(duplicates[i])
    }
    
}

console.log(data)


// setp 2 remove duplicate  value useing for loop

const duplicate2 = [3, 45, 2, 5, 2, 3, 5, 2, 4];
let data2 =[]
for(let datas2 of duplicate2){
   if(!data.includes(datas2)){
       data.push(datas2 ) }
}
console.log(data2)



