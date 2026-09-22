// 1- EventLoop   ( Done)
// 2- re-rendring  ( Done)
// 3 - optimize prefomance ( Done)
// 4 - Secuarty your apllctaion  ( Done)
// 5 - JavaScript Engine   how to work js  ( Done)
// 6 - const resign  ( Done)
// 7 - object compare  ( Done)
// 8 - Context Exutaion and TDZ ( Done)
// 9 - what is memory in javascript 
// 10 - Memory Leak and Garbage Collection
// 11 -  Garbage Collection detect memory leak


//  1 => Call Stack, Web APIs, Microtask Queue, Macrotask Queue & Event Loop (Short)

// Call Stack executes all synchronous JavaScript code, one function at a time.
// Web APIs are provided by the runtime environment to handle asynchronous operations like timers, network requests, and events without blocking the Call Stack.
// Microtask Queue stores high-priority asynchronous callbacks from Promises, which are executed immediately after the Call Stack becomes empty.
// Macrotask (Callback) Queue stores lower-priority callbacks such as setTimeout, setInterval, and UI events, which run only after all microtasks are completed.
// Event Loop continuously monitors the


// 2 ->React re-render optimization ensures that components re-render only when their relevant state or props change. This improves performance by preventing unnecessary executions and DOM update
// Re-render optimization in React is the process of minimizing unnecessary component re-renders by using memoization techniques like React.memo, useCallback, and useMemo to improve performance

// usememo and memo me diffrance

// useMemo is a React Hook used to prevent unnecessary re-calculation of values by memoizing the result of an expensive computation. It recalculates the value only when its dependencies change.
// React.memo is a Higher-Order Component (HOC) used to prevent unnecessary re-rendering of a component. The component re-renders only when its props change.

// | Feature      | `useMemo`          | `React.memo`                 |
// | ------------ | ------------------ | ---------------------------- |
// | Type         | Hook               | Higher Order Component       |
// | Memoizes     | Value / result     | Component                    |
// | Use location | Inside component   | Outside component            |
// | Prevents     | Re-calculation     | Re-render                    |
// | Common use   | Heavy calculations | Child component optimization |


// useMemo and React.memo caches are stored in JavaScript memory and are fully managed internally by React, so developers do not need to handle cache storage or cleanup.
// Heavy cache se load kyun nahi padta?

// Kyuki:

// Cache component-level hota hai (global nahi)

// Cache dependency-based hota hai

// Garbage Collector unused memory auto free karta hai

// React sirf last memoized value rakhta hai (history nahi)

// ➡️ Isliye memory leak nahi hota (agar sahi use ho)



// 🔹 Cache actually kahan hota hai?

// useMemo aur React.memo ka cache
// ➡️ JavaScript memory (heap) me hota hai
// ➡️ Component ke lifecycle ke saath linked hota hai

// Jab component unmount hota hai
// ❌ cache automatically clear ho jata hai


// 3 -- optimize prefomance

// One-Paragraph Interview Answer

// I optimize performance in my React applications by minimizing unnecessary re-renders using React.memo, useCallback, and useMemo, managing state efficiently, virtualizing large lists, implementing lazy loading, and analyzing performance using React DevTools Profiler.
// 1️⃣ Reduce Unnecessary Re-renders

// Use React.memo for child components

// Use useCallback for functions passed as props

// Use useMemo for expensive calculations

// 2️⃣ Optimize State Management

// Keep state local instead of global

// Split large state into smaller pieces

// Avoid unnecessary state updates

// 3️⃣ Optimize Rendering of Lists

// Use virtualized lists (react-window, react-virtualized) for large datasets

// Properly use keys in list rendering

// 4️⃣ Lazy Loading & Code Splitting

// Load components only when needed

// Use React.lazy and Suspense

// 5️⃣ API & Data Optimization

// Avoid redundant API calls

// Use pagination or infinite scrolling

// Debounce search inputs or heavy user interactions

// 6️⃣ Avoid Expensive Computations in Render

// Move calculations outside render

// Memoize heavy computations with useMemo

// 7️⃣ Optimize Images & Assets

// Use compressed images

// Implement lazy loading for images

// Serve optimized file formats (WebP, SVG)

// 8️⃣ Use Browser & React DevTools for Profiling

// Measure performance with React Profiler

// Analyze slow components and optimize

// 9️⃣ Minimize Reconciliation & DOM Updates

// Avoid unnecessary component nesting

// Prevent passing new object/array references every render

// 🔟 Other Tips

// Use Web Workers for heavy background tasks

// Avoid memory leaks with proper cleanup in useEffect




// 4 - Secuarty your apllctaion

// Updated Definition (Point-wise)

// I secure my React applications by protecting sensitive data (never storing secrets or API keys in frontend and using environment variables), using HTTPS to encrypt client-server communication, implementing proper authentication and authorization to ensure only authorized users can access resources, securing API calls with token-based authentication and backend validation, safely managing client-side storage (avoiding sensitive data in localStorage/sessionStorage and preferring httpOnly cookies), preventing XSS/CSRF attacks, validating user inputs, and keeping dependencies up to date to avoid vulnerabilities.

// 🔹 Key Points Incorporated

// Protect Sensitive Data ✅

// Use HTTPS ✅

// Authentication & Authorization ✅

// Secure API Calls ✅

// Protect Local/Session Storage ✅





//  5 JavaScript Engine   how to work js 

// Definition: JS engine is a program that reads your JS code, interprets it, and executes it.

// Popular Engines:

// Chrome → V8

// Firefox → SpiderMonkey

// Safari → JavaScriptCore (Nitro)

// How it works:

// Parser: Converts JS code into Abstract Syntax Tree (AST)

// Interpreter / Compiler: Converts AST to machine code

// Execution: Runs code in memory, manages call stack and heap

// 2️⃣ Memory in JavaScript

// JavaScript uses two main memory areas:

// Memory Type	What it stores	Example
// Stack	Primitive values and function calls	number, boolean, string, function context
// Heap	Objects, arrays, functions	{name: "Rahul"}, [1,2,3]

// Stack: fast, LIFO structure

// Heap: dynamic, used for reference types

// 3️⃣ Variables & Memory Allocation

// var

// Function-scoped

// Hoisted with undefined value

// Stored in execution context / stack

// let & const

// Block-scoped

// Temporal Dead Zone (TDZ) applies before initialization

// Stored in stack for primitives, heap for objects

// let a = 10; // primitive → stack
// const obj = {x: 1}; // object → heap

// 4️⃣ Garbage Collection & Memory Leak

// Garbage Collector (GC): JS engine automatically frees memory for objects no longer referenced

// Memory Leak: happens when memory is not freed even if it's not used

// Common Memory Leak Causes:

// Global variables → Never dereferenced

// Closures holding large objects

// DOM references not removed

// Timers or event listeners not cleared

// 5️⃣ Execution Flow

// Code loads → JS engine parses it

// Execution context created → stack frame

// Variables allocated → primitives in stack, objects in heap

// Function calls pushed → call stack

// Unused memory cleaned → GC

// 🎯 Interview One-Liner

// JavaScript engine executes code using stack (primitives & function context) and heap (objects/arrays). Variables (var, let, const) are stored accordingly, and the engine automatically cleans unused memory unless a memory leak occurs.

// const variable:
// A const variable is a fixed reference in memory. You cannot reassign the variable to a new value or object.

// Object property:
// The properties of an object are the data inside the object, and they can be modified because the reference to the object remains the same.

// Key Points

// Reference is locked:

// const user = { name: "Rahul" };
// user = { name: "Aman" }; // ❌ Error, cannot reassign the reference


// Data is mutable:

// user.name = "Aman"; // ✔ Allowed, property value can be changed

// Simple Analogy
// const house = my house
// - You cannot replace the house ❌
// - You can change furniture inside the house ✔


// House address = const variable (fixed reference)

// Furniture inside = object property (mutable data)




// 7 object compare 
// Objects in JavaScript are compared by reference, not by content.

// Different objects (even with same properties) → false

// Same object reference → true

// Example:

// const a = { x: 1 };
// const b = { x: 1 };
// const c = a;

// console.log(a === b); // false
// console.log(a === c); // true


// Tip: To compare content, use JSON.stringify(a) === JSON.stringify(b).

// JavaScript में objects reference type होते हैं, इसलिए उनका comparison memory address (reference) से होता है, data से नहीं।

// Simple reason

// Primitive values (number, string, boolean) → value से compare होते हैं

// Objects / arrays / functions → reference से compare होते हैं




// 7 1️⃣ What exactly is an Execution Context, and when is it created?

// 🔥 JavaScript Execution Context – FULL HINDI EXPLANATION
// 1️⃣ Execution Context kya hota hai? Kab banta hai?
// 👉 Simple shabdon me:

// Execution Context ek dabba (environment) hota hai jisme JavaScript code chalta hai.

// 🧠 Kab banta hai?

// Jab program start hota hai → Global Execution Context

// Jab function call hota hai → Function Execution Context

// 📌 Example:
// var a = 10;

// function test() {
//   var b = 20;
// }

// test();



// Execution Context + Call Stack – EK HI FINAL ANSWER (Clear & Correct)

// JavaScript ka sahi sequence ye hota hai:

// Sabse pehle Execution Context create hota hai,
// phir us Execution Context ko Call Stack manage karta hai,
// aur code execute hota hai.


// ✅ Execution Context pehle banta hai

// 🔷 Execution Context ke Types (Short me)

// 👉 Total 3 hote hain, lekin main focus 2 par hota hai:

// 1️⃣ Global Execution Context (GEC)
// 2️⃣ Function Execution Context (FEC)
// 3️⃣ Eval Execution Context (avoid ❌)

// 1️⃣ Global Execution Context (GEC)

// 👉 Jab JavaScript program start hota hai, sabse pehle Global Execution Context banta hai.
// 👉 Ye sirf ek hi baar banta hai.

// Global EC me kya hota hai?

// Memory Phase (Hoisting)

// Global variables

// Global functions

// this (browser me window)

// Execution Phase

// Code line by line run hota hai

// Example:
// var a = 10;

// function test() {
//   console.log("Hello");
// }

// console.log(a);


// 👉 Pehle memory me a aur test aate hain
// 👉 Phir execution hota hai

// 2️⃣ Function Execution Context (FEC)

// 👉 Jab bhi function CALL hota hai, tab naya Function Execution Context banta hai.

// Function EC me kya hota hai?

// Arguments

// Local variables

// Local this

// Apna scope

// Example:
// function add(x, y) {
//   var sum = x + y;
//   return sum;
// }

// add(5, 3);


// 👉 add() call hua
// ➡️ Function EC create hua
// ➡️ Kaam khatam → Function EC destroy

// 👉 Har function call par naya Function EC banta hai

// 3️⃣ Eval Execution Context ❌
// eval("var a = 10");


// ❌ Security issue
// ❌ Slow
// ❌ Debugging hard
// 👉 Isliye real projects me use nahi karte

// 🧠 Golden Rule (Interview Ready)

// JavaScript me pehle sirf Global Execution Context banta hai.
// Function Execution Context tabhi create hota hai jab function call hota hai.
// Dono ek saath nahi bante.

// 🔁 Correct Flow (Most Important)

// ❌ Galat soch:

// Pehle Call Stack handle karta hai → phir Execution Context banta hai

// ✅ Sahi Flow:
// 1️⃣ Execution Context create hota hai
// 2️⃣ Execution Context Call Stack me push hota hai
// 3️⃣ Code execute hota hai

// 👉 Call Stack sirf manager hai, creator nahi

// 🔹 Example ke sath Flow
// var a = 10;

// function demo() {
//   var b = 20;
//   console.log(b);
// }

// console.log(a);
// demo();

// Flow:

// 1️⃣ Global EC create (memory + execution)
// 2️⃣ Global EC Call Stack me
// 3️⃣ demo() call → Function EC create
// 4️⃣ Function EC Call Stack me push
// 5️⃣ Function complete → pop
// 6️⃣ Global complete → program end

// 📌 Final One-Line Answer (Perfect for Interview)

// JavaScript me pehle Execution Context create hota hai,
// phir Call Stack us Execution Context ko manage karta hai.
// Sabse pehle Global Execution Context banta hai,
// aur function call hone par Function Execution Context banta hai.

// Program start → Global Execution Context bana

// test() call → Function Execution Context bana

// 2️⃣ Ek time par kitne Execution Context ho sakte hain?
// 👉 Answer:

// Kai ho sakte hain, lekin ek hi time par ek execute hota hai.

// 🧠 Kaise manage hote hain?

// ➡ Call Stack ke through (LIFO – Last In First Out)

// 📌 Example:
// function one() {
//   two();
// }
// function two() {
//   three();
// }
// function three() {}

// one();

// 📚 Call Stack:
// Global
// one()
// two()
// three()

// 3️⃣ Execution Context ke types kaun se hain?
// 👉 3 Types:

// Global Execution Context

// Function Execution Context

// Eval Execution Context (use mat karo ❌)

// 4️⃣ Execution Context ke Creation Phase me kya hota hai?
// 👉 Creation Phase = sirf memory allocate hoti hai

// Code execute nahi hota

// 🧠 3 kaam hote hain:

// var → undefined

// function → poora ka poora store

// this → value milti hai

// 📌 Example:
// console.log(a); // undefined
// hello();        // works

// var a = 10;

// function hello() {
//   console.log("Hi");
// }

// 5️⃣ Call Stack kya hota hai?
// 👉 Simple:

// Call Stack batata hai kaunsa function abhi chal raha hai

// 📌 Example:
// function a() {
//   b();
// }
// function b() {
//   c();
// }
// function c() {}

// a();

// 📚 Stack:
// Global
// a()
// b()
// c()

// 6️⃣ Lexical Environment me kya hota hai?


// Lexical Environment me kya hota hai?

// 👉 Lexical Environment basically ek structure (box) hota hai jisme scope-related cheezein store hoti hain.

// ✅ Lexical Environment ke andar 3 cheezein hoti hain:

// 1️⃣ Variables

// var, let, const se bane variables

// Local aur global dono ho sakte hain

// 2️⃣ Functions

// Function declarations jo us scope ke andar defined hote hain

// 3️⃣ Parent Scope ka Reference

// Isse scope chain banti hai

// Inner scope outer scope ke variables access kar sakta hai

// 🧠 Easy Example
// let a = 10;

// function outer() {
//   let b = 20;

//   function inner() {
//     let c = 30;
//     console.log(a, b, c);
//   }

//   inner();
// }

// outer();

// Lexical Environment ka breakdown:
// 🌍 Global Lexical Environment

// Variables: a

// Functions: outer

// Parent Reference: null

// 📦 Outer Function Lexical Environment

// Variables: b

// Functions: inner

// Parent Reference: Global Lexical Environment

// 📦 Inner Function Lexical Environment

// Variables: c

// Functions: ❌

// Parent Reference: Outer Function Lexical Environment

// 👉 Isi chain ko Scope Chain bolte hain.

// 🔥 Interview One-Line Answer

// Lexical Environment me variables, functions aur parent scope ka reference hota hai, jisse scope chain banti hai.
// 👉 Lexical Environment ke andar hota hai:

// Variables

// Functions

// Parent scope ka reference

// 📌 Example:
// function outer() {
//   let x = 10;
//   function inner() {
//     console.log(x);
//   }
//   inner();
// }
// outer();

// 7️⃣ Scope Chain kaise banti hai?
// 👉 Agar variable nahi milta:

// JavaScript upar-upar search karta hai

// 📌 Example:
// let a = 5;

// function first() {
//   function second() {
//     console.log(a);
//   }
//   second();
// }
// first();

// 🔍 Search order:
// second → first → global

// 8️⃣ Variable na mile to kya hota hai?
// 👉 JavaScript poori scope chain check karta hai

// ❌ Nahi mila → ReferenceError

// 📌 Example:
// function test() {
//   console.log(x);
// }
// test(); // ReferenceError

// 9️⃣ Scope vs Execution Context difference
// Scope	Execution Context
// Variable kaha available hai	Code kaise run hoga
// Compile time	Run time
// Fixed	Dynamic
// 🔟 this ki value kaise decide hoti hai?
// 👉 Rule:

// Function kaise call hua hai, us par depend karta hai

// 📌 Example:
// console.log(this); // window

// function test() {
//   console.log(this);
// }
// test(); // window

// const obj = {
//   name: "Rahul",
//   show() {
//     console.log(this.name);
//   }
// };
// obj.show(); // Rahul

// 1️⃣1️⃣ let / const ReferenceError kyun dete hain?
// 👉 Kyunki wo Temporal Dead Zone (TDZ) me hote hain
// 📌 Example:
// console.log(a); // ReferenceError
// let a = 10;

// 1️⃣2️⃣ Temporal Dead Zone kya hota hai?
// 👉 TDZ:

// Variable memory me hota hai, lekin use nahi kar sakte

// 📌 Example:
// {
//   // TDZ start
//   let x = 5;
//   // TDZ end
// }

// 1️⃣3️⃣ Closure Execution Context par kyun depend karta hai?
// 👉 Closure purane variables ko yaad rakhta hai
// 📌 Example:
// function outer() {
//   let count = 0;
//   return function () {
//     count++;
//     console.log(count);
//   };
// }

// const counter = outer();
// counter(); // 1
// counter(); // 2

// 1️⃣4️⃣ Function return hone ke baad Execution Context ka kya hota hai?
// 👉 Normally:

// ❌ Destroy ho jata hai

// 👉 Closure me:

// ✅ Memory me reh jaata hai

// 1️⃣5️⃣ React / Angular / Vue me Execution Context kyun important hai?
// 👉 Samajh aata hai:

// Re-render kyun ho raha

// Closure bug

// setTimeout issue

// Memory leak

// this problem

// 📌 Example (React bug):
// useEffect(() => {
//   setTimeout(() => {
//     console.log(count);
//   }, 1000);
// }, []);


// Closure ki wajah se old count print hota hai.

// 🧠 FINAL INTERVIEW LINE (Yaad rakhna)

// “Execution Context JavaScript ka base hai — isi se hoisting, scope, closure, this aur async behavior samajh aata hai.”





//  9 answer 

// 🧠 JavaScript Memory
// 🔹 Memory kya hoti hai?

// Memory wo jagah hoti hai jahan JavaScript data, variables aur functions ko run time par store karti hai.

// 🔢 JavaScript me Memory ke 3 Types hote hain

// 1️⃣ Global Memory
// 2️⃣ Stack Memory
// 3️⃣ Heap Memory

// 1️⃣ Global Memory (Global Scope Memory) 🌍
// 📌 Definition:

// Global Memory wo memory hoti hai jisme global variables aur functions store hote hain,
// jo poore program me kahin se bhi access kiye ja sakte hain.

// 📦 Global Memory ke andar kya hota hai?

// Global variables (var, let, const)

// Global functions

// Browser me window object

// Accidental globals (without let/var/const)

// var a = 10;
// function test() {}

// ⚠️ Important Points:

// ✔ Program end hone tak memory free nahi hoti
// ❌ Zyada use se memory leak ho sakti hai

// 2️⃣ Stack Memory 📦
// 📌 Definition:

// Stack Memory wo memory hoti hai jahan function calls aur primitive data store hote hain.

// 📦 Stack Memory ke andar kya hota hai?

// Function execution context

// Local variables

// Primitive data types:

// number

// string

// boolean

// undefined

// null

// function add() {
//   let x = 10;
//   let y = 20;
// }
// add();

// ⚠️ Important Points:

// ✔ Function complete → memory auto clear
// ✔ Fast memory
// ❌ Limited size

// 3️⃣ Heap Memory 🧺
// 📌 Definition:

// Heap Memory wo memory hoti hai jahan non-primitive data store hota hai
// jaise objects, arrays, functions, closures.

// 📦 Heap Memory ke andar kya hota hai?

// Objects

// Arrays

// Functions

// Closures

// DOM elements

// let user = {
//   name: "Rahul",
//   age: 25
// };

// ⚠️ Important Points:

// ✔ Dynamic size
// ❌ Garbage Collector clean karta hai
// ❌ Reference bacha raha → memory leak

// 🔁 Stack vs Heap (Difference Table)
// Stack Memory	Heap Memory
// Primitive data	Objects / Arrays
// Auto clean hoti	GC clean karta
// Fast	Slow
// Limited size	Dynamic
// ⚠️ Memory Leak kab hoti hai?

// 📌 Jab:

// Object ka reference bacha rehta hai

// Event listener remove nahi hota

// Timer clear nahi hota

// Global variable unnecessary bana hota

// 🧠 One-line Interview Answers

// Memory: Data store karne ki jagah

// Global Memory: Global data store hota hai

// Stack Memory: Function & primitive data

// Heap Memory: Objects & arrays

// ✅ Short Trick Yaad rakhne ke liye:

// Global = Poora Program
// Stack = Function ke andar
// Heap = Heavy Objects




// 10 answer


// Memory Leak kya hoti hai?
// 📌 Definition:

// Memory Leak tab hoti hai jab program memory allocate karta hai,
// lekin use hone ke baad release nahi karta,
// aur wo memory bewajah occupied rehti hai.

// 👉 Matlab:
// Object kaam ka nahi, lekin memory me abhi bhi pada hai ❌

// 🟢 Garbage Collection kya hota hai?
// 📌 Definition:

// Garbage Collection JavaScript ka automatic process hai
// jo unused memory ko identify karke free karta hai.

// 👉 Matlab:
// Jo data use me nahi hai, GC use hata deta hai ✅

// JavaScript me Garbage Collector automatically chalta hai
// (developer ko manually delete nahi karna padta)

// 🔁 Memory Leak vs Garbage Collection (Difference)
// Point	Memory Leak	Garbage Collection
// Kya hai	Bug / problem	Automatic process
// Kaam	Memory free nahi hoti	Memory free karta hai
// Control	Developer ki galti se	JS engine handle karta
// Effect	App slow / crash	Performance better
// Example	Unused object reference	Unused object delete
// ❓ Memory Leak kyun hoti hai? (Main Reasons)
// 1️⃣ Global Variables
// data = "leak"; // let / var / const nahi


// ❌ Kabhi free nahi hota

// 2️⃣ Event Listener remove na karna
// element.addEventListener("click", fn);


// ❌ DOM remove ho gaya, listener reh gaya

// 3️⃣ setInterval clear na karna
// setInterval(() => {}, 1000);


// ❌ Infinite chalta rehta hai

// 4️⃣ Closures unnecessary reference
// function outer() {
//   let big = new Array(100000);
//   return () => big.length;
// }


// ❌ big memory me phasa rehta hai

// 5️⃣ Detached DOM Elements
// let el = document.getElementById("box");
// document.body.removeChild(el);


// ❌ Reference abhi bhi hai

// 🛠️ Memory Leak kaise kam kare? / rok sakte hain
// ✅ 1️⃣ Proper variable declare karo
// let data = "safe";

// ✅ 2️⃣ Event listeners cleanup karo
// element.removeEventListener("click", fn);

// ✅ 3️⃣ Timers clear karo
// const id = setInterval(() => {}, 1000);
// clearInterval(id);

// ✅ 4️⃣ Unused references ko null karo
// obj = null;

// ✅ 5️⃣ React me cleanup function use karo
// useEffect(() => {
//   const id = setInterval(() => {}, 1000);
//   return () => clearInterval(id);
// }, []);

// 🧠 Easy Trick yaad rakhne ke liye

// Garbage Collection = Safai karne wala 🧹
// Memory Leak = Kachra jo safai se bhi nahi hata


// 11  garbage  collation detect memory leak

// JavaScript khud memory leak detect nahi karta

// ❗ Important baat:

// JavaScript memory leak “detect” nahi karta
// balki Garbage Collector decide karta hai kaun si memory free ho sakti hai

// 🧠 JavaScript Engine kya karta hai?

// JavaScript engine (jaise V8) ke andar ek system hota hai jise kehte hain:

// 👉 Garbage Collector (GC) 🧹

// GC ka kaam:

// Check karna: kaun sa object abhi reachable hai

// Jo reachable nahi hai, use memory se hata dena

// 🔑 Core Concept: Reachability
// 📌 Rule:

// Agar kisi object tak program pahunch sakta hai → wo memory me rahega
// Agar nahi pahunch sakta → GC use delete kar dega

// 🌳 GC ka starting point hota hai: Roots
// Roots kya hote hain?

// Global variables

// Current function ke local variables

// Call stack ke variables

// Active closures

// let user = { name: "Rahul" };


// 👉 user ek root reference hai
// 👉 GC bolega: “isko delete nahi karna”

// ❌ Ab yahan memory leak kaise hoti hai?
// let user = { name: "Rahul" };

// function save() {
//   return user;
// }


// user use me nahi hai

// Lekin reference abhi bhi exist karta hai

// 👉 GC bolega:

// “Reference hai → object reachable hai → delete mat karo”

// ❌ Yahin se memory leak hoti hai

// 🧪 Garbage Collector ka actual algorithm (simple)
// 1️⃣ Mark phase

// GC sab roots se start karta hai

// Jo-jo object reachable hai → mark karta hai

// 2️⃣ Sweep phase

// Jo object mark nahi hua → delete

// 👉 Is process ko bolte hain:

// 🟢 Mark & Sweep Algorithm
// 🧠 JavaScript kya nahi kar sakta?

// ❌ Ye nahi samajh sakta:

// “Ye object logically ab kaam ka nahi”

// “Developer ab use nahi karega”

// GC sirf dekhta hai:

// Reference hai ya nahi

// 🔍 Isliye DevTools ki zarurat padti hai

// JavaScript engine internally sirf free karta hai

// Lekin leak ka reason nahi batata

// 👉 User DevTools se:

// Heap Snapshot

// Allocation Timeline
// use karke developer mistake pakadta hai

// 📌 One-line Interview Answer

// JavaScript memory leak detect nahi karta, Garbage Collector sirf unreachable memory free karta hai.

// 🧠 Easy yaad rakhne ka rule

// GC = reference dekhta hai
// Leak = galat reference ki wajah se hoti hai