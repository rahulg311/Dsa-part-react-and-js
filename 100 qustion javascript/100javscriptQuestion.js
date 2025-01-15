// 1 How can you check if a variable is an array or not in JavaScript?

let variable = [1, 2, 3];

if (Array.isArray(variable)) {
  console.log('Variable is an array.');
} else {
  console.log('Variable is not an array.');
}

//  2nd method

if (variable instanceof Array) {
    console.log('Variable is an array.');
  } else {
    console.log('Variable is not an array.');
  }


// 2 How to add  2 number of array sum of 6
function addnumber (dd){
    
    const data =  [4,2,1,3,45,3,5,49,67,42];
    
    // const target =dd 
    
    for(var i=0 ; i<data.length; i++){
        for(var j=i+1 ; j<data.length; j++){
            if(data[j] +data[i] === dd){
            
                return [data[i], data[j]]
            }}}
        return null;
    }
    
console.log(addnumber(6))


// Question 3 
// What is the purpose of the Array.isArray() method?

// The Array.isArray() method in JavaScript is used to determine whether a value is an array or not. It returns true if the value is an array, otherwise it returns false.

// Question 4
// How do you remove the last element from an array in JavaScript?
// The pop() method removes (pops) the last element of an array. The pop() method changes the original array.
const datas= [ 874,23,3,2,44,22,77]

let dd = data.pop()
console.log(datas)



// Question 5
// Write a function to remove a specific element from an array.
const data= [ 874,23,3,2,44,22,77]
const c= []
for(let i=0; i<data.length ; i++){
    if(data[i] != 44){
        c.push(data[i])
        // return [data[i]]
    }
    
}
// 2nd methoid
const ff = data.filter((i)=> i != 874 )
console.log(ff)


function removeElementFromArray(array, element) {
    const index = array.indexOf(element);
    if (index !== -1) {
        array.splice(index, 1);
    }
    // Optionally, you can return the modified array
    return array;
}

// Example usage:
let array = [1, 2, 3, 4, 5];
removeElementFromArray(array, 3); // Removes the element 3 from the array
console.log(array); // Output: [1, 2, 4, 5]



// Question 5-----------------------------
// Explain the difference between array.slice() and array.splice() methods.

// The slice() method returns a shallow copy of a portion of an array into a new array
//  object selected from begin to end (end not included). The original array will not be modified.
let arrays = [1, 2, 3, 4, 5];
let slicedArray = array.slice(1, 4); // Returns [2, 3, 4]
console.log(slicedArray); // Output: [2, 3, 4]
console.log(array);


// splice() Method:

// The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
// It directly mutates the original array.
// It accepts three parameters: start, deleteCount, and optional item1, item2, etc., which are the elements to add to the array.

let arrayss = [1, 2, 3, 4, 5];
array.splice(1, 2); // Removes 2 elements starting from index 1
console.log(array); // Output: [1, 4, 5] (original array modified)

array.splice(2, 0, 'a', 'b'); // Inserts 'a' and 'b' at index 2
console.log(array); // Output: [1, 4, 'a', 'b', 5]


// Question 6-----------------------------
// Write a function to reverse an array in JavaScript.
const datasss= [ 874,23,3,2,44,22,77]

function rev (el){
    for(let i=el.length-1; i>0; i-- ){
        console.log(el[i])
        
    }}
rev(data)
// 2nd method----------------------

console.log(data.reverse())



// Question 5----------------------------


// How can you sort an array in JavaScript?
const data2= [ 874,23,3,2,44,22,77]


function rev (el){
    for(let i=0; i<el.length; i++ ){ 
        for(let j=i+1; j<el.length; j++ ){
            // console.log(el[i] ,el[j])
            if(el[i]>el[j]){
               let temp =el[i]
               el[i]= el[j]
               el[j] = temp
                }}
 }
       return el
}
console.log(rev(data))




// Question 6----------------------------
// What does the Array.map() method do?

// The Array.map() method in JavaScript creates a new array by calling a provided 
// function once for each element in the original array. It then returns an array of
//  the results of the function calls.


// Question 7----------------------------
// Write a function to flatten a nested array in JavaScript.



function rev (el){
    let flattenedArray = [];
     for(let i=0; i<el.length; i++ ){ 
         if(Array.isArray(el[i])){
             // console.log(el[i])
             flattenedArray.push(...el[i])
             
         }else{
             flattenedArray.push(el[i])
         }
          }
return flattenedArray.join(',')
 }
 
  const abc= [ 874,[23,3],2,[44,[22,77]]]

 console.log(rev(abc))

 //-----------2nd method
 function flattenArray(arr) {
    let flattenedArray = [];
    arr.forEach(element => {
        if (Array.isArray(element)) {
            flattenedArray.push(...flattenArray(element)); // Recursively flatten nested arrays
        } else {
            flattenedArray.push(element);
        }
    });
    return flattenedArray;
}

// Example usage:
const nestedArray = [1, [2, 3], [4, [5, 6]]];
const flattened = flattenArray(nestedArray);
console.log(flattened); // Output: [1, 2, 3, 4, 5, 6]



// Question 8----------------------------
// Write a function to find the maximum and minimum elements in an array.

function findMaxAndMin(array) {
    if (array.length === 0) {
        return "Array is empty";
    }

    let max = array[0];
    let min = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
        if (array[i] < min) {
            min = array[i];
        }
    }

    return { max, min };
}

// Example usage:
const numbers = [5, 3, 9, 1, 7, 2];
const result = findMaxAndMin(numbers);
console.log(result); // Output: { max: 9, min: 1 }

























































































































// Sure, here are 50 logical questions related to arrays in JavaScript:

// How can you check if a variable is an array or not in JavaScript?
// Explain the difference between array.push() and array.concat() methods.
// What is the purpose of the Array.isArray() method?
// How do you remove the last element from an array in JavaScript?
// Write a function to remove a specific element from an array.
// How can you find the index of a specific element in an array?
// Explain the difference between array.slice() and array.splice() methods.
// Write a function to reverse an array in JavaScript.
// How can you sort an array in JavaScript?
// What does the Array.map() method do?
// Explain the difference between Array.filter() and Array.find() methods.
// Write a function to flatten a nested array in JavaScript.
// How do you check if an array contains a specific value in JavaScript?
// Explain the difference between array.unshift() and array.shift() methods.
// Write a function to find the maximum and minimum elements in an array.
// How can you merge two arrays in JavaScript?
// Explain the purpose of the Array.reduce() method.
// Write a function to remove duplicate elements from an array.
// How do you iterate over an array in JavaScript?
// Explain the concept of a callback function in the context of array methods.
// Write a function to shuffle an array in JavaScript.
// How can you convert a string to an array in JavaScript?
// What is the purpose of the Array.join() method?
// How can you create an array of a specific length in JavaScript?
// Explain the difference between Array.includes() and Array.indexOf() methods.
// Write a function to find the intersection of two arrays in JavaScript.
// How do you copy an array in JavaScript without modifying the original array?
// Explain the difference between Array.every() and Array.some() methods.
// Write a function to rotate an array to the right by a certain number of steps.
// How can you split an array into chunks of a specific size in JavaScript?
// Explain the concept of a sparse array in JavaScript.
// Write a function to remove falsy values from an array in JavaScript.
// How do you convert an array to a comma-separated string in JavaScript?
// Explain the purpose of the Array.fill() method.
// Write a function to find the union of two arrays in JavaScript.
// How can you convert an array-like object to an array in JavaScript?
// Explain the concept of mutability in arrays.
// Write a function to find the mode of an array in JavaScript.
// How do you iterate over array elements in reverse order?
// Explain the purpose of the Array.from() method.
// Write a function to check if two arrays are equal in JavaScript.
// How can you find the difference between two arrays in JavaScript?
// Explain the difference between array.pop() and delete array[index].
// Write a function to pad an array with a specific value to a given length.
// How do you clone an array in JavaScript?
// Explain the concept of a sparse array in JavaScript.
// Write a function to find the frequency of each element in an array.
// How can you convert a multidimensional array to a flat array in JavaScript?
// Explain the concept of destructuring assignment with arrays.
// Write a function to check if an array is sorted in ascending order in JavaScript.