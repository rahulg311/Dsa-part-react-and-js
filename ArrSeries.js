// array reverse 

// by using method
let arr=[1,2,3,4,5,6,7]
function arrRev(arr){
    return arr.reverse()
}

console.log("Welcome to Programiz!\n",arrRev(arr));

// by without method
function arrRev(arr){
    let newArr=[];
    for(let i=arr.length-1;i>=0;i--){
        newArr.push(arr[i])
    }
    return newArr
}

console.log("Welcome to Programiz!\n",arrRev(arr));


// reverse string

function reverStr(str){
    return str.split("").reverse().join("")
}


console.log("Welcome to Programiz!",reverStr("hello check"));

// reverse string without using method

function reverStr(str){
    let newStr="";
    for(let i=str.length-1;i>=0;i--){
        newStr+=str[i]
    }
    return newStr
}


console.log("Welcome to Programiz!",reverStr("hello check"));



// split string without using split method

function reverStr(str){
    let arr=[];
    for(let i=0;i<str.length;i++){
        arr.push(str[i]);
    }
    return arr
}


console.log("Welcome to Programiz!",reverStr("hello check"));

// find max value in array
function maxValue(arr){
    return arr.reduce((a,b)=>{ 
        if(a>b) return a
        return b
        })
}

console.log("Welcome to Programiz!",maxValue(arr));


// find max value in array

function maxValue(arr){
    return Math.max(...arr)
}

console.log("Welcome to Programiz!",maxValue(arr));


// find max value without using method

function maxValue(arr){
    var val = arr[0];
    for(let i=0;i<arr.length;i++){
        if(arr[i]>val) val= arr[i];
    }
    return val
}

console.log("Welcome to Programiz!",maxValue(arr));

// input  -- arr=[1,2,3,4,8,5,6,7,12]
// output -- 12


// sum of array of an object
let arr1 = [
    {count:1,tst:"tst"},
    {count:1,tst:"tst"},
    {count:1,tst:"tst"},
    {count:1,tst:"tst"},
    {count:1,tst:"tst"},
    ]
let sum = arr1.reduce((a,b)=>{
    console.log("a+b",a,b.count)
    return a+b.count},0)
console.log("Welcome to Programiz!",sum);

// input -  arr1 = [
    // {count:1,tst:"tst"},
    // {count:1,tst:"tst"},
    // {count:1,tst:"tst"},
    // {count:1,tst:"tst"},
    // {count:1,tst:"tst"},
    // ]

// output - 5


