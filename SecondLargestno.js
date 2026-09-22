
const data =[2,5,6,2,6,3,7,3]


function secondlar(n){
    
    let largest=-1
    let secondLargest=-1
    for(let i=0; i<=n.length; i++){
       if(n[i]>largest){
           secondLargest=largest
           largest =n[i]
       }else if (n[i] > secondLargest && n[i] < largest) {
      secondLargest = n[i];
    }
    }
   
    return secondLargest
    
}
console.log(secondlar(data))
