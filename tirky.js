/****************************************************
 * JavaScript Interview Questions with Explanation
 ****************************************************/

/*--------------------------------------------------
1. typeof null
--------------------------------------------------*/

console.log(typeof null); // "object"

/*
Reason:
JavaScript ke first version me ek bug tha.
null actually object nahi hai.

Lekin backward compatibility ki wajah se:

typeof null === "object"

aaj bhi same hai.
*/


/*--------------------------------------------------
2. typeof NaN
--------------------------------------------------*/

console.log(typeof NaN); // "number"

/*
Reason:
NaN = Not a Number

Lekin JavaScript me NaN bhi Number type ka
special value hai.

isliye:

typeof NaN === "number"
*/


/*--------------------------------------------------
3. [] + []
--------------------------------------------------*/

console.log([] + []); // ""

/*
Reason:

[] string me convert hota hai:

[].toString() => ""

to:

"" + ""

Result => ""
*/


/*--------------------------------------------------
4. [] + {}
--------------------------------------------------*/

console.log([] + {}); // "[object Object]"

/*
Reason:

[] => ""

{} => "[object Object]"

to:

"" + "[object Object]"

Result:

"[object Object]"
*/


/*--------------------------------------------------
5. {} + []
--------------------------------------------------*/

console.log({} + []);

/*
Browser Console:
0

Node.js:
"[object Object]"

Reason:

Parser kabhi {} ko block maan leta hai.

Tab expression ban jata hai:

+[]

+[] => 0

Result => 0

Ye JavaScript ka famous parser trick question hai.
*/


/*--------------------------------------------------
6. 1 + "2" + 3
--------------------------------------------------*/

console.log(1 + "2" + 3); // "123"

/*
Step 1:

1 + "2"

=> "12"

Ab:

"12" + 3

=> "123"

Jab ek string aa jati hai
to + operator concatenation karta hai.
*/


/*--------------------------------------------------
7. 1 + +"2" + 3
--------------------------------------------------*/

console.log(1 + +"2" + 3); // 6

/*
Reason:

+"2"

Unary Plus string ko number me convert karta hai.

+"2" => 2

Ab:

1 + 2 + 3

=> 6
*/


/*--------------------------------------------------
8. false == "0"
--------------------------------------------------*/

console.log(false == "0"); // true

/*
Reason:

Loose Equality (==)

false => 0

"0" => 0

0 == 0

=> true
*/


/*--------------------------------------------------
9. false === "0"
--------------------------------------------------*/

console.log(false === "0"); // false

/*
Reason:

=== value + type dono compare karta hai.

false => boolean

"0" => string

Types different hain.

Result => false
*/


/*--------------------------------------------------
10. null == undefined
--------------------------------------------------*/

console.log(null == undefined); // true

/*
Reason:

JavaScript me special rule hai:

null == undefined

hamesha true deta hai.
*/


/*--------------------------------------------------
11. null === undefined
--------------------------------------------------*/

console.log(null === undefined); // false

/*
Reason:

=== type bhi compare karta hai.

null type alag

undefined type alag

Result => false
*/


/*--------------------------------------------------
12. 0.1 + 0.2 === 0.3
--------------------------------------------------*/

console.log(0.1 + 0.2 === 0.3); // false

/*
Reason:

Floating Point Precision Issue

0.1 + 0.2

actually:

0.30000000000000004

hota hai.

isliye comparison fail ho jata hai.
*/


/*--------------------------------------------------
13. NaN === NaN
--------------------------------------------------*/

console.log(NaN === NaN); // false

/*
Reason:

JavaScript me NaN ek aisi value hai
jo khud ke equal bhi nahi hoti.

NaN === NaN

=> false
*/


/*--------------------------------------------------
14. Object.is(NaN, NaN)
--------------------------------------------------*/

console.log(Object.is(NaN, NaN)); // true

/*
Reason:

Object.is() NaN ko properly compare karta hai.

Object.is(NaN, NaN)

=> true
*/


/*--------------------------------------------------
15. Array Reference Comparison
--------------------------------------------------*/

let arr1 = [1, 2];
let arr2 = [1, 2];

console.log(arr1 == arr2); // false

/*
Reason:

Arrays reference type hain.

Memory:

arr1 => Address A

arr2 => Address B

Content same hai
Address different hai

Result => false
*/


/*--------------------------------------------------
16. Object Reference
--------------------------------------------------*/

let obj1 = { name: "JS" };
let obj2 = obj1;

obj2.name = "React";

console.log(obj1.name); // React

/*
Reason:

obj1 aur obj2 dono same object ko
point kar rahe hain.

Memory:

obj1 ----\
          \
           ---> { name: "JS" }
          /
obj2 ----/

obj2 change hua

to original object change hua.

Result => React
*/


/*--------------------------------------------------
17. typeof typeof 1
--------------------------------------------------*/

console.log(typeof typeof 1); // "string"

/*
Step 1:

typeof 1

=> "number"

Step 2:

typeof "number"

=> "string"

Result => "string"
*/


/*--------------------------------------------------
18. let with setTimeout
--------------------------------------------------*/

for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 0);
}

/*
Output:

0
1
2

Reason:

let block scoped hai.

Har iteration me naya i create hota hai.

Iteration 1 => i = 0

Iteration 2 => i = 1

Iteration 3 => i = 2

isliye output:

0 1 2
*/


/*--------------------------------------------------
19. var with setTimeout
--------------------------------------------------*/

for (var j = 0; j < 3; j++) {
  setTimeout(() => {
    console.log(j);
  }, 0);
}

/*
Output:

3
3
3

Reason:

var function scoped hota hai.

Loop complete hone ke baad:

j = 3

ho jata hai.

Sab callbacks same variable ko
refer karte hain.

isliye:

3
3
3
*/


/*--------------------------------------------------
20. "5" - 2
--------------------------------------------------*/

console.log("5" - 2); // 3

/*
Reason:

- operator string concat nahi karta.

JavaScript number conversion karta hai.

"5" => 5

5 - 2

=> 3
*/


/*--------------------------------------------------
21. "5" + 2
--------------------------------------------------*/

console.log("5" + 2); // "52"

/*
Reason:

+ operator string dekhte hi
concatenation start kar deta hai.

"5" + 2

=> "5" + "2"

=> "52"
*/


/*--------------------------------------------------
22. !!"JavaScript"
--------------------------------------------------*/

console.log(!!"JavaScript"); // true

/*
Reason:

!"JavaScript"

=> false

!false

=> true

Double !! boolean conversion ke liye use hota hai.
*/


/*--------------------------------------------------
23. Boolean([])
--------------------------------------------------*/

console.log(Boolean([])); // true

/*
Reason:

Empty Array bhi truthy hoti hai.

if([]){
   // chalega
}

Result => true
*/


/*--------------------------------------------------
24. Boolean({})
--------------------------------------------------*/

console.log(Boolean({})); // true

/*
Reason:

Empty Object bhi truthy hota hai.

if({}){
   // chalega
}

Result => true
*/


/*--------------------------------------------------
25. instanceof Array
--------------------------------------------------*/

console.log([1, 2, 3] instanceof Array); // true

/*
Reason:

instanceof check karta hai
object kis constructor se bana hai.

[1,2,3]

Array constructor se bana hai.

Result => true
*/


/****************************************************
 MOST IMPORTANT TOPICS COVERED
 ****************************************************

1. typeof
2. Type Coercion
3. == vs ===
4. Truthy / Falsy
5. NaN
6. Object.is()
7. Reference vs Value
8. Array & Object Memory
9. Scope (let vs var)
10. Event Loop
11. setTimeout
12. instanceof
13. ToString()
14. ToNumber()
15. Floating Point Precision

****************************************************/