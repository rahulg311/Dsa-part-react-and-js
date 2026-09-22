// Array Advanced (20)

//  Sorting type of
 // 1. bubule sort => Har baar 2 elements compare hote h aur agar order galat h to unhe swap kar dete h.
    //  Ye process repeat hoti hai jab tak pura array sorted na ho jaye.

//  2. selection sort  =>Har round me minimum (ya maximum) element dhundho aur usko correct position pe le aao

//  3. qucik sort  =>Ek pivot choose karo.
// Usse chote elements left me, bade right me.
// Left aur right ko recursively sort karo.
// Time Complexity: O(n log n) (average), O(n²) (worst)



//  type of search 
// 1. Linear Search (Sequential Search)
// Isme hum ek-ek karke array ke element check karte h.
// Agar element mil gaya to uska index return karte h, nahi to -1.
// Time Complexity → O(n)

// 2. Binary Search
// Ye sorted array ke liye hota hai.
// Array ko middle element se divide karte h, aur check karte h ki element left side me h ya right side me.
// Har step me array half ho jata hai.
// Time Complexity → O(log n)

// Ek array ke second largest element ko nikalo.

// Ek array me missing number find karo (1 se n tak).

// Ek array me continuous subarray ka maximum sum nikalo (Kadane’s algorithm).

// Ek array ko rotate karo k steps right side.

// Ek array ko rotate karo k steps left side.

// Ek array ke elements ko random shuffle karo.

// Ek array ke elements ko group karo size k ke chunks me.

// Ek array ke saare elements ko frequency ke decreasing order me sort karo.

// Ek array me intersection nikalna (common elements between 2 arrays).

// Ek array me difference nikalna (a me jo h but b me nahi).

// Ek array ko spiral order me print karo (2D array).

// Ek array me majority element find karo (jo n/2 se zyada bar aata ho).

// Ek array ko partition karo odd left me aur even right me.

// Ek array ke elements ko zig-zag order me arrange karo.

// Ek array ko k sorted subarrays me todh kar merge sort karo.

// Ek array me continuous duplicate groups ko compress karo.

// Ek array ko bina extra space reverse karo.

// Ek array ko sort karo bina inbuilt function use kiye aur O(n log n) complexity.

// Ek array ke saare subsets generate karo.

// Ek array ke saare permutations generate karo.

// 🔹 String Advanced (20)

// Ek string ke saare substrings generate karo.

// Ek string me longest palindrome substring find karo.

// Ek string me longest substring without repeating characters find karo.

// Ek string me longest common prefix find karo.

// Ek string ko anagram check karo.

// Ek string ko rotation check karo (s1 rotation of s2).

// Ek string me characters ko frequency ke decreasing order me sort karo.

// Ek string ke words ko reverse order me bina extra split use kiye.

// Ek string ko camelCase me convert karo.

// Ek string ko snake_case me convert karo.

// Ek string ke characters ko ASCII value ke increasing order me sort karo.

// Ek string ke characters ko toggle case karo.

// Ek string ko encode karo run-length encoding ke format me.

// Ek string ko decode karo run-length encoded string se.

// Ek string ke characters ko randomly shuffle karo.

// Ek string ke words ko reverse order me aur har word ko bhi reverse karo.

// Ek string me first repeating character find karo.

// Ek string me last non-repeating character find karo.

// Ek string palindrome permutation check karo.

// Ek string me balanced brackets check karo.

// 🔹 Object Advanced (15)

// Ek object me deep equality check function likho.

// Ek object me circular reference detect karo.

// Ek object me nested key se value safely extract karna.

// Ek object ke saare keys ko camelCase me convert karo.

// Ek object ke saare keys ko snake_case me convert karo.

// Ek object ke keys ko alphabetical order me sort karo.

// Ek object ke saare values ka sum nikalo.

// Ek object ko flatten karo (nested ko single level).

// Ek object ko unflatten karo (flat se nested banao).

// Ek object ke andar duplicate keys remove karo.

// Ek object ka hash banao (stringify + hash algo).

// Ek object me property ko freeze aur check karo ki change hua ya nahi.

// Ek object me ek property delete karo bina delete keyword use kiye.

// Ek object ko clone karo prototype safe way me.

// Ek object ke values ko unique banao agar array ke form me ho.

// 🔹 Functions & Closure (15)

// Ek function likho jo curry function implement kare.

// Ek function likho jo partial application implement kare.

// Ek function likho jo memoization implement kare.

// Ek function likho jo pipe implement kare.

// Ek function likho jo compose implement kare.

// Ek function likho jo once utility banaye (sirf ek baar chale).

// Ek function likho jo retry kare failed function ko 3 baar.

// Ek function likho jo delay kare execution ko given ms ke liye.

// Ek function likho jo infinite curry function banaye (sum(1)(2)(3)() = 6).

// Ek function likho jo function ko reverse arguments ke sath call kare.

// Ek function likho jo function ke calls ko count kare.

// Ek function likho jo random id generator ho closure ke sath.

// Ek function likho jo fibonacci generator ho closure ke sath.

// Ek function likho jo lazy evaluation kare values ka.

// Ek function likho jo deep clone closures ke sath safe ho.

// 🔹 Async & Promises (15)

// Ek function likho jo custom Promise banaye scratch se.

// Ek function likho jo Promise.allSettled implement kare.

// Ek function likho jo Promise.race implement kare.

// Ek function likho jo Promise.any implement kare.

// Ek function likho jo sequential async tasks chalaye loop ke through.

// Ek function likho jo parallel async tasks chalaye limit ke sath (concurrency control).

// Ek function likho jo retry kare API ko exponential backoff ke sath.

// Ek function likho jo timeout kare promise ko agar jyada delay ho.

// Ek function likho jo cancelable promise banaye.

// Ek function likho jo debounce async tasks kare.

// Ek function likho jo throttle async tasks kare.

// Ek function likho jo ek array of promises ko waterfall pattern me execute kare.

// Ek function likho jo ek async generator banaye.

// Ek function likho jo ek observable pattern implement kare.

// Ek function likho jo ek event emitter implement kare.

// 🔹 Miscellaneous (15)

// Ek custom deep clone function likho without JSON.

// Ek random number generator banao min aur max ke beech.

// Ek function likho jo number ko words me convert kare (123 → "one hundred twenty three").

// Ek function likho jo factorial recursive aur iterative dono me nikale.

// Ek function likho jo fibonacci recursive aur iterative dono me nikale.

// Ek function likho jo LRU cache implement kare.

// Ek function likho jo debounce resize event ke liye banao.

// Ek function likho jo web worker simulate kare JS me.

// Ek function likho jo binary search tree implement kare.

// Ek function likho jo linked list implement kare.

// Ek function likho jo stack implement kare.

// Ek function likho jo queue implement kare.

// Ek function likho jo graph traversal kare (DFS, BFS).

// Ek function likho jo matrix transpose kare.

// Ek function likho jo matrix multiplication kare.

