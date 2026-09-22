
// JavaScript me constructor ek property hoti hai jo batati hai ki koi object kis class/function se banaya gaya hai.
// Ye har object ke paas hoti hai (kyunki wo prototype chain ka hissa hai).

// Example 1: Numbers, Strings, Arrays
// console.log((123).constructor);      // [Function: Number]
// console.log(("hello").constructor);  // [Function: String]
// console.log(([1,2,3]).constructor);  // [Function: Array]
// console.log(({}).constructor);       // [Function: Object]



let NestedArray = [1, [2, [3, 4], 5], 6];
  let orgData =[]

  function ArrayChcek (data){
    return  data && data.constructor === Array


  }
const RemoveNestedArray = (a)=>{
   
    for(let i=0; i<=a.length-1; i++){
        // if(Array.isArray(a[i])){
        // or without inbuild method use
         if(ArrayChcek(a[i])){
            RemoveNestedArray(a[i])
        }else{
            orgData.push(a[i])
            

        }
    }

}

RemoveNestedArray(NestedArray)
console.log(orgData)






// let big = [1, [2, [3, 4], 5], 6];

// // flat method
// let flattened = big.flat(2); // 2 = depth of flattening
// console.log(flattened); // [1, 2, 3, 4, 5, 6]
// flat() by default 1 level deep flatten karta hai.

// Agar aapko poore nested array ko flatten karna hai to aap Infinity pass kar sakte ho:

// js
// Copy code
// let fullyFlattened = big.flat(Infinity);
// console.log(fullyFlattened); // [1, 2, 3, 4, 5, 6]









