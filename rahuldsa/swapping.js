const sorting = [ 2,4,2,3,5,2]

for(let i=0; i<sorting.length-1;i+=2){
    //  console.log(sorting[i])
     temp = sorting[i];
    sorting[i]= sorting[i+1];
    sorting[i+1]= temp
   
}
console.log(sorting)