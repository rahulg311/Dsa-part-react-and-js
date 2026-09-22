function shallowEqual(obj1, obj2) {
   let keys1 =Object.keys(obj1)
     let keys2=Object.keys(obj2)
     if(keys1.length!==keys2.length) return false
     for(let key of keys1){
        //  console.log(obj1[key] , obj1[key])
        if(obj1[key] !==  obj2[key]) return false
     }
     return true
    //  console.log(keys1,keys2)
}

const obj1 = { a: 1, b: 2 };
const obj2 = { a: 1, b: 2 };

console.log(shallowEqual(obj1, obj2)); // true






// nested object 
function deepEqual(obj1, obj2) {
    if (obj1 === obj2) return true;
    if (typeof obj1 !== 'object' || obj1 === null || typeof obj2 !== 'object' || obj2 === null) {
        return false;
    }

    let keys1 = Object.keys(obj1);
    let keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) return false;

    for (let key of keys1) {
        if (!deepEqual(obj1[key], obj2[key])) return false;
    }

    return true;
}




// const obj1 = { a: 1, b: { c: 2 } };
// const obj2 = { a: 1, b: { c: 1 } };
// console.log(deepEqual(obj1, obj2)); // true

