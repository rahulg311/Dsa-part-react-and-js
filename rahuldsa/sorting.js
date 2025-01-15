//  sorting array in number
const sort = [4,2,2,4,5,7,2,1]
sort.sort()
console.log(sort)

//  for loop useing sorting in array

// const sorts = [4,2,2,4,5,7,2,1] or const sort = ["ca","d","d","a","x","s","x"]
for(let i=0; i<=sorts.length; i++){
    for(let j=0; j<=sort.length-1-i; j++){
        if(sort[j] >sort[j+1]){
            temp = sort[j];
            sort[j]= sort[j+1];
            sort[j+1]= temp
        }}
    }
console.log(sorts)

//  array of object sorting 
const arrayOfObjects = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 35 },
  ];

  arrayOfObjects.sort((a, b) => a.age - b.age)


//  for loop usning sorting 
const afb = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 35 },
  ];
  for(let i=0; i<=afb.length-1; i++){
      for(let j=0; j<afb.length-1-i; j++){ 
         if(afb[j].age >afb[j+1].age){
             temp = afb[j];
             afb[j] =afb[j+1];
             afb[j+1]= temp
          }
           }
  }
  console.log(afb)

  