// Sample array of numbers
const numbers = [5, 2, 9, 1, 5, 6];

// Sorting the array in ascending order
const ascendingOrder = numbers.sort((a, b) => a - b);


//   2 method
const data = [3,4,2,6,89,9]
//  let f=  data.sort((a,b)=> a-b)
 
 for(let i=0; i<data.length-1; i++){
     for(let j=0; j<data.length-1-i; j++){
         if(data[j] > data[j+1]){
             let temp = data[j];
             data[j]= data[j+1];
             data[j+1]= temp
            }
        }
    //   return temp
    }

console.log("Welcome to Programiz!", data);




// bubble sorting 
let arr=[8,2,5,1];
function bubbleSort(arr){
    for(let i=0; i<arr.length;i++){
        for(let j=0;j<arr.length-i-1;j++){
            if(arr[j+1]<arr[j]){
                [arr[j+1],arr[j]]=[arr[j],arr[j+1]];
            }
        }
    }
    return arr
}

console.log("Welcome to Programiz!",bubbleSort(arr));

// input arr=[8,2,5,1]
// output - [ 1, 2, 5, 8 ]


// insertion Sort 
function insertionSort(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=i; j>-1;j--){
            if(arr[j+1]<arr[j]){
                [arr[j+1],arr[j]]=[arr[j],arr[j+1]];
            }
        }
    }
    return arr
}

console.log("Welcome to Programiz!",insertionSort(arr));

// input arr=[8,2,5,1]
// output - [ 1, 2, 5, 8 ]


// selection sort 

function selectionSort(arr){
    let m
    for(let i=0;i<arr.length;i++){
         m=i;
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]<arr[m]){
                m=j;
            }
        }
        if(m!==i){
            [arr[i],arr[m]]=[arr[m],arr[i]]
        }
    
    }
    return arr;
}

console.log("Welcome to Programiz!",selectionSort(arr));

// input arr=[9,7,5,4,8,2,6,1];
// output [1, 2, 4, 5,6, 7, 8, 9]