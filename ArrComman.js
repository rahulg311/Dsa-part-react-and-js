
// remove one item from array

let arr=[1,6,3,7,8,4,5]
let index= arr.indexOf(7)
if(index>-1){
    arr.splice(index,1) // 2nd parameter means remove one item only
    // delete arr[index] // only delete the element but index has undefined value remain ex-[1,2,undefined,4,5]
}

console.log("Welcome to Programiz!",arr);

// input - [1,6,3,7,8,4,5]
//  output - [ 1, 6, 3, 8, 4, 5 ]


// remove all specific value in array

let arr1=[6,5,9,8,3,7,8,6,3,3]
let newArr= arr1.filter((item)=>item!==3)

console.log("Welcome to Programiz!",newArr);

// input - [6,5,9,8,3,7,8,6,3,3]
// output - [ 6, 5, 9, 8, 7, 8, 6]


// remove deleArr data for original array

let deleArr=[2,5,6]
let arr2=[1,4,9,6,7,2,8,6,4,2,3,5,6]
let newArr2=arr2.filter(item=>!deleArr.includes(item))
console.log("Welcome to Programiz!",newArr2);

// input - deleArr=[2,5,6]
//         arr2=[1,4,9,6,7,2,8,6,4,2,3,5,6]
// output - [ 1, 4, 9, 7, 8, 4, 3]


// delete element in arr
let arr3=[4,6,3,7,8,9,2,5];
function deleteEl(arr,del){
    let index=arr.indexOf(del)
    for(let i=index;i<arr.length;i++){
       arr[i]=arr[i+1]
    }
    arr.length=arr.length-1
    return arr
}

console.log("Welcome to Programiz!",deleteEl(arr3,8));

// input - arr3=[4,6,3,7,8,9,2,5];
        // del= 8;
// output - [ 4, 6, 3, 7, 9, 2, 5 ]


// Remove Element in by Prototype  

let arr4=[2,4,6,8,9,7,5,3]
Array.prototype.removeItem = function(del){
    for(let i=0;i<this.length;i++){
        if(this[i]==del){
            for(let j=i;j<this.length;j++){
                this[j]=this[j+1];
            }
            this.length=this.length-1;
            return this;
        }
    }
}
console.log("Welcome to Programiz!",arr4.removeItem(9));

// input - [2,4,6,8,9,7,5,3]
// output - [ 2, 4, 6, 8, 7, 5, 3 ]


// Find the missing number in a given integer array of 1 to 10

let arr5 = [1,2,3,4,5,6,7,8,10];

function findNum(arr){
    for(let i=0;i<arr5.length-1;i++){
        if(arr5[i]+1!=arr5[i+1]){
            console.log("missing number is",arr5[i]+1)
        }
    }
}
console.log("Welcome to Programiz!",findNum(arr5));

// input - arr5 = [1,2,3,4,5,6,7,8,10];
// output - missing number is 9


// Find a duplicate number in an array of integers

let arr6 = [1,2,3,4,5,6,7,7,8,6,10];

function dupl(arr6){
    let obj={};
    for(let i=0;i<arr6.length;i++){
        if(obj[arr6[i]]){
            return arr6[i]
        }else{
            obj[arr6[i]]=1;
        }
    }
    return false
}
console.log("Welcome to Programiz!",dupl(arr6));

// input - arr6 = [1,2,3,4,5,6,7,7,8,6,10];
// output - 7
    

// Find the largest and smallest number in an unsorted array of integers

let arr7=[1, 2, 3, 4, 100];

function minMax(arr7){
    let min=arr7[0]
    let max=arr7[0]
    for(let i=0;i<arr7.length;i++){
        if(arr7[i]>max){
            max=arr7[i];
        }else if(arr7[i]<min){
            min=arr7[i];
        }
    }
    return {max,min}
} 

console.log("Welcome to Programiz!",minMax(arr7));

// input - arr7=[1, 2, 3, 4, 100];
// output - { max: 100, min: 1 }


// Return an array showing the cumulative sum at each index of an array of integers

let arr8=[1,3,5,7];

function cumulativeSum(arr8){
    let resultArr=[arr8[0]]
    for(let i=0;i<arr8.length-1;i++){
        resultArr.push(resultArr[i]+arr8[i+1])
    }
    return resultArr;
}

console.log("Welcome to Programiz!",cumulativeSum(arr8));

// input - arr8=[1,3,5,7]
// output - [ 1, 4, 9, 16 ]
