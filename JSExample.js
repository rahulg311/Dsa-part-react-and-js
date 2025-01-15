
// callback function example 

let arr=[1,2,5,6,8]
function ModifiyArray(arr,callback){
    arr.push(100)
    callback()
}
ModifiyArray(arr,()=>console.log("CallBack function called"))
console.log("Welcome to Programiz!",arr);

// input - arr=[1,2,5,6,8]
//         console.log("CallBack function called")
// output - [ 1, 2, 5, 6, 8, 100 ]
//          CallBack function called



// Empty string 
let arr1=[1,2,3,4,5,6,6]
arr1=[]
console.log("Welcome to Programiz!",arr1);

// input - arr1=[1,2,3,4,5,6,6];
// output - [];


// decrease array length
let arr2=[1,2,3,4,5,6];
arr2.length=arr2.length-1 // any length which you want to give

console.log("Welcome to Programiz!",arr2.length);

// input - arr2=[1,2,3,4,5,6]; length- 6
// output - length 5



// "mul" function  (multiplication function)
function mulFunc(x){
    return (y)=>{
        return (z)=>{
            return x * y * z
        }
    }
}

console.log("Welcome to Programiz!",mulFunc(2)(5)(3));

// input - mulFunc(2)(5)(3);
// output - 30


// add number with base value
function createBase(baseVal){
    return function (n){
        return baseVal+n;
    }
}

let addNumber = createBase(6);
addNumber(10)
console.log("Welcome to Programiz!",addNumber(20));

// input - baseVal 6
//         addVal 20
// output - 26



// counter function with use of self-invoking function with closure 

let add =(function(){
    let counter=0;
    // inner function is a form of closure
    return function(){
        counter += 1;
        return counter
    }
})()
add();
console.log("Welcome to Programiz!",add());

// output - 2


// FizzBuzz Challenge 
// Create a for loop that iterates up to 100 while outputting "fizz" at multiples of 3, "buzz" at multiples of 5 and "fizzbuzz" at multiples of 3 and 5.

for(let i=0;i<=10;i++){
    let f = i%3 == 0,
        b = i%5 == 0;
    console.log(f?(b? "fizzBuzz":"fizz"):b?"buzz":i)
}

// output - fizzBuzz
//          1
//          2
//          fizz
//          4
//          buzz
//          fizz

