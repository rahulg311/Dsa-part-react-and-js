// 1. Eventloop =>Event Loop ek mechanism hai jo JavaScript ko asynchronous code handle karne deta hai, jabki JavaScript khud single-threaded hoti hai.

// 👉 Matlab
// JS ek time par sirf ek kaam karti hai, lekin phir bhi async kaam (API, timer, promise) possible hote hain — Event Loop ki wajah se.






//  main diffantion 

// Call Stack, Web APIs, Microtask Queue, Macrotask Queue & Event Loop (Short)

// Call Stack executes all synchronous JavaScript code, one function at a time.
// Web APIs are provided by the runtime environment to handle asynchronous operations like timers, network requests, and events without blocking the Call Stack.
// Microtask Queue stores high-priority asynchronous callbacks from Promises, which are executed immediately after the Call Stack becomes empty.
// Macrotask (Callback) Queue stores lower-priority callbacks such as setTimeout, setInterval, and UI events, which run only after all microtasks are completed.
// Event Loop continuously monitors the Call Stack and moves tasks from the Microtask Queue first, and then from the Macrotask Queue, into the Call Stack for execution.








// 2️⃣ Web APIs (Browser deta hai, JS nahi)

// Ye JavaScript ka part nahi hote, browser provide karta hai:

// setTimeout

// setInterval

// fetch

// DOM events

// console


// 🔹 (A) Microtask Queue (🔥 High Priority)

// Isme aata hai:

// Promise.then

// catch

// finally

// MutationObserver

// queueMicrotask



// B) Macrotask / Callback Queue (⬇️ Low Priority)

// Isme aata hai:

// setTimeout

// setInterval

// DOM events

// MessageChannel


// Event Loop ka actual kaam kya hai?

// Event Loop continuously check karta rehta hai:

// Call Stack khali hai ya nahi

// Agar khali hai →

// Pehle Microtask Queue

// Phir Macrotask Queue





//     ab main diagram-style + React real example ke saath samjhaata hoon taaki 100% clear ho jaaye.

// 🧩 JavaScript Event Loop – Diagram Flow
//  ┌───────────────────────┐
//  │        Call Stack     │  ← synchronous code
//  └───────────────────────┘
//             │
//             ▼
//  ┌───────────────────────┐
//  │        Web APIs        │  ← timers, fetch, DOM
//  └───────────────────────┘
//         │          │
//         ▼          ▼
// ┌──────────────┐ ┌──────────────┐
// │ Microtask Q  │ │ Macrotask Q  │
// │ (Promise)    │ │ (setTimeout) │
// └──────────────┘ └──────────────┘
//         │
//         ▼
//    Event Loop


// 👉 JavaScript Event Loop sirf ek kaam karta hai:
// Call Stack empty hote hi → Microtask → Macrotask

// ❓ Short Answer (seedha jawab)

// ❌ Promise Web API me nahi jata
// ✅ setTimeout Web API me jata hai

// 👉 Promise turant resolve hota hai aur uska .then()
// direct Microtask Queue me chala jata hai

// 🔥 Ab dono ko alag-alag samjhte hain
// 1️⃣ setTimeout ka exact flow
// setTimeout(() => {
//   console.log("timeout");
// }, 0);

// Step-by-step:
// 🔹 Step 1: Call Stack
// Call Stack:
// ┌──────────────┐
// │ setTimeout   │
// │ Global()     │
// └──────────────┘

// 🔹 Step 2: Web API

// Browser ke paas Timer API hota hai

// Callback + delay browser ko de diya jata hai

// Web API:
// ┌────────────────────────┐
// │ Timer (0ms) + callback │
// └────────────────────────┘

// 🔹 Step 3: setTimeout stack se nikal jata hai
// Call Stack:
// ┌──────────────┐
// │ Global()     │
// └──────────────┘

// 🔹 Step 4: Timer complete

// Browser callback ko Macrotask Queue me daal deta hai

// Macrotask Queue:
// ┌──────────────────────┐
// │ timeout callback     │
// └──────────────────────┘


// 👉 Event Loop baad me uthata hai

// 2️⃣ Promise ka exact flow
// Promise.resolve().then(() => {
//   console.log("promise");
// });

// ❗ Sabse important baat

// 👉 Promise Web API use hi nahi karta

// 🔹 Step 1: Call Stack
// Call Stack:
// ┌────────────────────┐
// │ Promise.resolve()  │
// │ Global()           │
// └────────────────────┘

// 🔹 Step 2: Promise resolve

// Promise.resolve() turant fulfilled ho jata hai

// .then() ka callback Microtask Queue me push hota hai

// Microtask Queue:
// ┌──────────────────────┐
// │ promise then cb      │
// └──────────────────────┘


// 👉 No Web API
// 👉 No Timer
// 👉 No waiting