// 🔹 1️⃣ Unary + operator (Positive Operator)
// Purpose:

// Explicitly value ko number me convert karta hai.

// +"5"       // 5 (number)
// +true      // 1
// +false     // 0
// +""        // 0
// +[]        // 0
// +{}        // NaN


// Note: Unary + → always number conversion, string ya array → number

// 🔹 2️⃣ Unary - operator (Negative Operator)
// Purpose:

// Value ko number me convert karta hai, phir sign change karta hai

// -"5"       // -5
// -true      // -1
// -false     // 0
// -""        // 0
// -[]        // 0
// -{}        // NaN


// Important: Negative operator bhi number me convert karta hai.
// Sign ke saath result return karta hai

// 🔹 3️⃣ + (Binary Plus / Addition)

// Binary + ka behaviour special hai:

// "" + 5       // "5"  → string concatenation
// [] + 5       // "5"  → array → "" → string
// [1] + 5      // "15" → [1] → "1"
// {} + 5       // 5 ({} treated as block)


// Rule: Agar koi side string hai → string concatenation,
// Agar dono number → addition

// 🔹 4️⃣ -, *, / (Binary Arithmetic)
// "5" - 2       // 3 → string converted to number
// [] - 2        // -2 → [] → 0
// [1] - 2       // -1 → [1] → 1
// {} - 2        // NaN → {} → object → NaN


// Rule: Binary arithmetic operators → both sides converted to number
// Left ya right value ka type ignore hota hai

// 🔹 Summary Table
// Operator	Conversion
// Unary +	number (always)
// Unary -	number with negative
// Binary +	string if either side string, else number
// - * / %	number
// 🔹 Interview Tip

// JS me + operator ke liye string conversion ho sakta hai,
// - * / operators ke liye number conversion hota hai.
// Isliye developers ko confusion hota hai.

// Agar chaho to main [] , {} , "" + operators ka FULL matrix bana kar
// har combination ke output + reason bata doon.