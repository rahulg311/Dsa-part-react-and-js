// --------------------
// 🔹 Array Advanced (20)
// --------------------

//
// 2) Ek array me missing number find karo (1 se n tak).
// Input: [1, 2, 4, 10]  // assume n = 5
// Output: [ 3, 5, 6, 7, 8, 9 ]

const data = [1, 2, 4, 10];
function MissingNO(n) {
  let missno = [];
  let min = n[0];
  let max = n[0];
  for (let key of n) {
    if (key < min) {
      min = key;
    } else if (key > max) {
      max = key;
    }
  }
  for (let i = min; i <= max; i++) {
    let found = true;
    for (let j = 0; j <= n.length - 1; j++) {
      if (n[j] == i) {
        found = false;
      }
    }
    if (found) {
      missno[missno.length] = i;
    }
  }

  return missno;
}
console.log(MissingNO(data));

// 3) Ek array me continuous subarray ka maximum sum nikalo (Kadane’s algorithm).
// Input: [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6   // subarray [4,-1,2,1]

function maxSubArrayBruteForce(arr) {
  let maxsum = arr[0];
  let bestStart = 0,
    bestEnd = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    let currSum = 0;
    for (let j = i; j < arr.length - 1; j++) {
      currSum = currSum + arr[j];

      if (currSum > maxsum) {
        maxsum = currSum;
        bestStart = i;
        bestEnd = j;
      }
    }
  }
  let subarray = [];
  for (let k = bestStart; k <= bestEnd; k++) {
    subarray.push(arr[k]);
  }
  return {
    maxsum: maxsum,
    subarray: subarray,
  };
}

let arrs = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log("\nFinal Answer:", maxSubArrayBruteForce(arrs));

// 4) Ek array ko rotate karo k steps right side.
// Input: arr=[1,2,3,4,5], k=2
// Output: [4,5,1,2,3]

let arrs = [1, 2, 3, 4, 5],
  k = 3;
console.log(maxSubArrayBruteForce(arrs, k));
function rotateRight(arr, k) {
  let n = arr.length;
  k = k % n; // agar k > n ho to wrap around

  let rotated = [];

  // Last k elements ko front me daalo
  for (let i = n - k; i < n; i++) {
    rotated[rotated.length] = arr[i];
  }

  // Baaki elements add karo
  for (let i = 0; i < n - k; i++) {
    rotated[rotated.length] = arr[i];
  }

  return rotated;
}

let arr = [1, 2, 3, 4, 5];
console.log("Right Rotation:", rotateRight(arr, 3)); // [3,4,5,1,2]

// 5) Ek array ko rotate karo k steps left side.
// Input: arr=[1,2,3,4,5], k=2
// Output: [3,4,5,1,2]
function rotateLeft(arr, k) {
  let n = arr.length;
  k = k % n;

  let rotated = [];

  // Pehle k se aage wale elements add karo
  for (let i = k; i < n; i++) {
    rotated[rotated.length] = arr[i];
  }

  // Pehle k elements ko end me daalo
  for (let i = 0; i < k; i++) {
    rotated[rotated.length] = arr[i];
  }

  return rotated;
}

console.log("Left Rotation:", rotateLeft(arr, 3)); // [4,5,1,2,3]

// 6) Ek array ke elements ko random shuffle karo.
// Input: [1,2,3,4]
// Output (example): [3,1,4,2]  // any permutation possible

function shuffleArray(arr) {
  let n = arr.length;

  // copy array so original na change ho
  let shuffled = [];
  for (let i = 0; i < n; i++) {
    shuffled[i] = arr[i];
  }

  // Fisher–Yates algorithm
  for (let i = n - 1; i > 0; i--) {
    // 0 se i tak random index choose karo
    let j = Math.floor(Math.random() * (i + 1));

    // swap shuffled[i] and shuffled[j]
    let temp = shuffled[i];
    shuffled[i] = shuffled[j];
    shuffled[j] = temp;
  }

  return shuffled;
}

let arr = [1, 2, 3, 4];
console.log(shuffleArray(arr)); // example output: [3,1,4,2]

// 7) Ek array ke elements ko group karo size k ke chunks me.
// Input: arr=[1,2,3,4,5], k=2
// Output: [[1,2],[3,4],[5]]
function chunkArray(arr, target) {
  let arrs = [];
  let subarr = [];
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    subarr[subarr.length] = arr[i];
    count++;

    if (count == target) {
      arrs[arrs.length] = subarr; // push subarray
      subarr = []; // reset for next chunk
      count = 0;
    }
  }

  if (subarr.length > 0) {
    arrs[arrs.length] = subarr; // last remaining elements
  }

  return arrs;
}

let arrs = [1, 2, 3, 4, 5],
  k = 2;
console.log("\nFinal Answer:", chunkArray(arrs, k));
// Output: [[1,2],[3,4],[5]]

// 8) Ek array ke saare elements ko frequency ke decreasing order me sort karo.
// Input: [4,4,1,2,2,3,4]
// Output: [4,4,4,2,2,1,3]

function frequencySort(arr) {
  let freq = {};

  // Frequency count
  for (let i = 0; i < arr.length; i++) {
    if (!freq[arr[i]]) {
      freq[arr[i]] = 1;
    } else {
      freq[arr[i]]++;
    }
  }

  // Convert freq object to array of [element, count]
  let freqArr = [];
  for (let key in freq) {
    freqArr[freqArr.length] = [parseInt(key), freq[key]];
  }

  // Sort manually by frequency descending
  for (let i = 0; i < freqArr.length - 1; i++) {
    for (let j = i + 1; j < freqArr.length; j++) {
      if (freqArr[i][1] < freqArr[j][1]) {
        let temp = freqArr[i];
        freqArr[i] = freqArr[j];
        freqArr[j] = temp;
      }
    }
  }

  // Build result array
  let result = [];
  for (let i = 0; i < freqArr.length; i++) {
    let [val, count] = freqArr[i];
    for (let j = 0; j < count; j++) {
      result[result.length] = val;
    }
  }

  return result;
}

let arrs = [4, 4, 1, 2, 2, 3, 4];
console.log("\nFinal Answer:", frequencySort(arrs));
// Output: [4,4,4,2,2,1,3]

// 9) Ek array me intersection nikalna (common elements between 2 arrays).
// Input: a=[1,2,3], b=[2,3,4]
// Output: [2,3]
function frequencySort(a, b) {
  // console.log(a,b).
  let re = [];
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      if (a[i] === b[j]) {
        re[re.length] = a[i];
      }
    }
  }

  return re;
}

let arrs = [1, 2, 3],
  b = [2, 3, 4];
console.log(frequencySort(arrs, b));
// Output: [4,4,4,2,2,1,3]

// 10) Ek array me difference nikalna (a me jo h but b me nahi).
// Input: a=[1,2,3], b=[2,4]
// Output: [1,3]

function frequencySort(a, b) {
  // console.log(a,b).
  let re = [];
  for (let i = 0; i < a.length; i++) {
    let found = true;
    for (let j = 0; j < b.length; j++) {
      if (a[i] == b[j]) {
        found = false;
        break;
      }
    }
    if (found) {
      re[re.length] = a[i];
    }
  }

  return re;
}

let arrs = [1, 2, 3],
  b = [2, 4];
console.log(frequencySort(arrs, b));
// Output: [4,4,4,2,2,1,3]

// 11) Ek array ko spiral order me print karo (2D array).
// Input: [[1,2,3],[4,5,6],[7,8,9]]
// Output: [1,2,3,6,9,8,7,4,5]

// 12) Ek array me majority element find karo (jo n/2 se zyada bar aata ho).
// Input: [3,3,4,2,3,3,5]
// Output: 3  // appears 4 times out of 7

let arrs = [3, 3, 4, 2, 3, 3, 5];
let majority = Math.floor(arrs.length / 2);
// console.log(majority)

function data(a, b) {
  let dd = [];
  for (let i = 0; i < a.length; i++) {
    let count = 0;
    for (let j = 0; j < a.length; j++) {
      if (a[i] == a[j]) {
        count++;
      }
    }
    console.log(count >= b);
    if (count >= b) {
      dd[dd.length] = a[i];
      break;
    }
  }
  return dd;
}

console.log(data(arrs, majority));
// 13) Ek array ko partition karo odd left me aur even right me.
// Input: [1,2,3,4,5,6]
// Output: [1,3,5,2,4,6]  // relative order may vary depending implementation
let arrs = [1, 2, 3, 4, 5, 6];
let majority = Math.floor(arrs.length / 2);
// console.log(majority)

function data(a, b) {
  let dd = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i] % 2 == 1) {
      dd[dd.length] = a[i];
    }
  }
  for (let i = 0; i < a.length; i++) {
    if (a[i] % 2 != 1) {
      dd[dd.length] = a[i];
    }
  }
  return dd;
}

console.log(data(arrs, majority));
// 14) Ek array ke elements ko zig-zag order me arrange karo.
// Input: [4,3,7,8,6,2,1]
// Output: [3,7,4,8,2,6,1]  // pattern: a<b>c<d>e...
function zigZag(arr) {
  let flag = true; // true => "<", false => ">"

  for (let i = 0; i < arr.length - 1; i++) {
    if (flag) {
      // "<" relation hona chahiye
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    } else {
      // ">" relation hona chahiye
      if (arr[i] < arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
    flag = !flag; // har step pe condition ulta karna
  }

  return arr;
}

// Input
let arr = [4, 3, 7, 8, 6, 2, 1];
console.log("Final Zig-Zag:", zigZag(arr));

// 15) Ek array ko k sorted subarrays me todh kar merge sort karo.
// Input: [5,2,9,1,5,6]
// Output: [1,2,5,5,6,9]
// Bubble Sort Function
function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // swap
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

// 16) Ek array me continuous duplicate groups ko compress karo.
// Input: [1,1,2,2,2,3,3,4]
// Output: [[1,1],[2,2,2],[3,3],[4]]
function compressGroups(arr) {
  let result = [];
  let currentGroup = [];

  for (let i = 0; i < arr.length; i++) {
    // group me add karo
    currentGroup.push(arr[i]);

    // agar next element alag hai, to group complete ho gaya
    if (arr[i] !== arr[i + 1]) {
      result.push(currentGroup);
      currentGroup = []; // naya group start karo
    }
  }

  return result;
}

// Test
// let arr = [1,1,2,2,2,3,3,4];
console.log(compressGroups(arr));

// 17) Ek array ko bina extra space reverse karo.
// Input: [1,2,3,4]
// Output: [4,3,2,1]
let data = [1, 2, 3, 4];

function datas(n) {
  let rev = [];
  for (let i = n.length - 1; i >= 0; i--) {
    rev[rev.length] = n[i];
  }
  return rev;
}

console.log("Try programiz.pro", datas(data));

// 18) Ek array ko sort karo bina inbuilt function use kiye aur O(n log n) complexity.
// Input: [5,2,9,1,5,6]
// Output: [1,2,5,5,6,9]

let data = [5, 2, 9, 1, 5, 6];

function datas(n) {
  let rev = [];
  for (let i = 0; i < n.length; i++) {
    for (let j = 0; j < n.length - i; j++) {
      if (n[j] > n[j + 1]) {
        [n[j], n[j + 1]] = [n[j + 1], n[j]];
      }
    }
  }
  return n;
}

console.log("Try programiz.pro", datas(data));

// 19) Ek array ke saare subsets generate karo.
// Input: [1,2]
// Output: [[],[1],[2],[1,2]]

function subsets(nums) {
  let result = [[]]; // initially empty set

  for (let num of nums) {
    let newSubsets = [];
    for (let subset of result) {
      newSubsets.push([...subset, num]); // add current number to each existing subset
    }
    result.push(...newSubsets);
  }

  return result;
}

console.log(subsets([1, 2]));
// Output: [ [], [1], [2], [1, 2] ]
// result अब [[], [1]]

// Loop over subsets:

// subset = [] → [...subset, 2] = [2] → newSubsets = [[2]]

// subset = [1] → [...subset, 2] = [1, 2] → newSubsets = [[2], [1, 2]]

// Add newSubsets to result:
// result = [[], [1], [2], [1, 2]]

// 20) Ek array ke saare permutations generate karo.
// Input: [1,2,3]
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

// --------------------
// 🔹 String Advanced (20)
// --------------------

// 21) Ek string ke saare substrings generate karo.
// Input: "ab"
// Output: ["a","b","ab"]

function generateSubstrings(str) {
  let result = [];

  for (let i = 0; i < str.length; i++) {
    // start index
    for (let j = i + 1; j <= str.length; j++) {
      // end index (exclusive)
      console.log(i, j);
      let substring = "";
      for (let k = i; k < j; k++) {
        substring += str[k];
      }
      result[result.length] = substring; // add substring to result
    }
  }

  return result;
}

console.log(generateSubstrings("ab"));
// Output: ["a", "b", "ab"]

// 22) Ek string me longest palindrome substring find karo.
// Input: "babad"
//Output: "bab"  // or "aba" (either valid)
function generateSubstrings(str) {
  let rev = "";
  for (let i = str.length - 1; i >= 0; i--) {
    //  console.log(str[i])
    rev += str[i];
  }

  console.log(rev, str);
  if (rev == str) {
    return true;
  }
  return false;
}
generateSubstrings(aba);
// Output: ["a", "b", "ab"]

// 23) Ek string me longest substring without repeating characters find karo.
// Input: "abcabcbb"
// Output: "abc"  // length 3
function generateSubstrings(str) {
  let or = "";
  for (let i = 0; i < str.length; i++) {
    let found = true;
    for (let j = 0; j < or.length; j++) {
      if (or[j] == str[i]) {
        found = false;
        break;
      }
    }
    if (found) {
      or += str[i];
    }
  }

  return or;
}

console.log(generateSubstrings("abcabcbba"));

// 24) Ek string me longest common prefix find karo.
// Input: ["flower","flow","flight"]
// Output: "fl"
function longestCommonPrefix(strs) {
  if (strs.length === 0) return "";

  // Step 1: array sort कर लो
  strs.sort();
  //   console.log(strs)

  // Step 2: पहला और आखिरी word लो
  let first = strs[0];
  let last = strs[strs.length - 1];
  console.log("hhghgghgh", first, last);

  let prefix = "";

  // Step 3: character by character compare करो
  for (let i = 0; i < first.length && i < last.length; i++) {
    if (first[i] === last[i]) {
      prefix += first[i];
    } else {
      break;
    }
  }

  return prefix;
}

// Test
console.log(longestCommonPrefix(["flower", "flow", "flight"])); // "fl"
// console.log(longestCommonPrefix(["dog","racecar","car"]));    // ""
// console.log(longestCommonPrefix(["interspecies","interstellar","erstate","interstate"])); // "inters"

// 25) Ek string ko anagram check karo.
// Input: s1="listen", s2="silent"
// Output: true

function longestCommonPrefix(a, b) {
  function sorting(d) {
    let n = d.split("");
    for (let i = 0; i <= n.length - 1; i++) {
      for (let j = 0; j <= n.length - 1 - i; j++) {
        if (n[j] > n[j + 1]) {
          [n[j], n[j + 1]] = [n[j + 1], n[j]];
        }
      }
    }
    return n;
  }

  let data1 = sorting(a).join("");
  let data2 = sorting(b).join("");
  if (data1 == data2) {
    return true;
  } else {
    return false;
  }
}

let s1 = "listenw",
  s2 = "silent";

console.log(longestCommonPrefix(s1, s2)); // "fl"

// 26) Ek string ko rotation check karo (s1 rotation of s2).
// Input: s1="waterbottle", s2="erbottlewat"
// Output: true
function isRotation(s1, s2) {
  // Step 1: length check (rotation me length same honi chahiye)
  if (s1.length !== s2.length) return false;

  // Step 2: s1 ko do bar jod do aur check karo s2 usme hai ya nahi
  let doubled = s1 + s1;
  return doubled.includes(s2);
}

// Test
console.log(isRotation("waterbottle", "erbottlewat")); // true
console.log(isRotation("hello", "lohel")); // true
console.log(isRotation("hello", "olelh")); // false

// 27) Ek string me characters ko frequency ke decreasing order me sort karo.
// Input: "tree"
// Output: "eert"  // 'e' twice first
function frequencySort(str) {
  // Step 1: frequency map
  let freq = {};
  for (let char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }

  // Step 2: array of [char, freq]
  let pairs = [];
  for (let key in freq) {
    pairs.push([key, freq[key]]);
  }
  console.log("avdvd ", pairs);
  // Step 3: bubble sort (descending by freq)
  for (let i = 0; i < pairs.length - 1; i++) {
    for (let j = 0; j < pairs.length - 1 - i; j++) {
      console.log(pairs[j][1], pairs[j + 1][1]);
      if (pairs[j][1] < pairs[j + 1][1]) {
        let temp = pairs[j];
        pairs[j] = pairs[j + 1];
        pairs[j + 1] = temp;
      }
    }
  }
  console.log("shhd", pairs);
  // Step 4: result build
  let result = "";
  for (let [ch, count] of pairs) {
    for (let i = 0; i < count; i++) {
      result += ch;
    }
  }

  return result;
}

// Test
console.log(frequencySort("tree")); // "eert"

// 28) Ek string ke words ko reverse order me bina extra split use kiye.
// (example invocation using manual traversal)
// Input: "hello world from js"
// Output: "js from world hello"
function frequencySort(b) {
  let result = [];
  let str = b.split(" ");
  //   console.log(str)
  for (let i = str.length - 1; i >= 0; i--) {
    result[result.length] = str[i];
  }

  return result;
}

// Test
console.log(frequencySort("hello world from js"));

// 29) Ek string ko camelCase me convert karo.
// Input: "hello world example"
// Output: "helloWorldExample"

function frequencySort(b) {
  let array = [];
  let word = "";

  for (let i = 0; i < b.length; i++) {
    let d = b[i];
    if (d === " ") {
      if (word.length > 0) {
        array[array.length] = word;
        word = "";
      }
    } else {
      word += d;
    }
  }
  if (word.length > 0) {
    array[array.length] = word;
  }

  let cpc = "";
  for (let i = 0; i < array.length; i++) {
    let dd = array[i];
    cpc += dd[0].toUpperCase() + dd.slice(1).toLowerCase() + " ";
  }

  return cpc;
}

// Test
console.log(frequencySort("hello world example"));

// 30) Ek string ko snake_case me convert karo.
// Input: "Hello World Example"
// Output: "hello_world_example"

// 31) Ek string ke characters ko ASCII value ke increasing order me sort karo.
// Input: "dbca"
// Output: "abcd"

// 32) Ek string ke characters ko toggle case karo.
// Input: "HelloWORld"
// Output: "hELLo worLD"  // exact toggle for each char

let stri = "Hello WORld";

function data(a) {
  let sr = "";
  for (let i = 0; i < a.length; i++) {
    let ch = a[i];
    if (ch.toLowerCase() === ch) {
      sr += ch.toUpperCase();
    } else if (ch.toUpperCase() === ch) {
      sr += ch.toLowerCase();
    }
  }
  return sr;
}
console.log(data(stri));

// or

function toggleCase(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    let code = str[i].charCodeAt(0);

    if (code >= 65 && code <= 90) {
      // Uppercase to lowercase
      result += String.fromCharCode(code + 32);
    } else if (code >= 97 && code <= 122) {
      // Lowercase to uppercase
      result += String.fromCharCode(code - 32);
    } else {
      // Other characters remain the same
      result += str[i];
    }
  }
  return result;
}

console.log(toggleCase("Hello WORld 123!")); // hELLO worLD 123!

// 33) Ek string ko encode karo run-length encoding ke format me.
// Input: "aaabbc"
// Output: "a3b2c1"  // or "a3b2c"

let str = "addaabbc";

function runLengthEncode(s) {
  let encoded = "";
  let count = 1;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1]) {
      count++;
    } else {
      // append character and count (you can omit count if 1)
      encoded += s[i] + (count > 1 ? count : "");
      count = 1; // reset count for next character
    }
  }

  return encoded;
}

console.log(runLengthEncode(str)); // Output: "a3b2c"

// 34) Ek string ko decode karo run-length encoded string se.
// Input: "a3b2c1"
// Output: "aaabbc"
let encodedStr = "a3b2c1";

function runLengthDecode(s) {
  let decoded = "";
  for (let i = 0; i < s.length; i += 2) {
    let char = s[i];
    let count = parseInt(s[i + 1]); // get the number after the character
    for (let j = 0; j < count; j++) {
      decoded += char;
    }
  }
  return decoded;
}

console.log(runLengthDecode(encodedStr)); // Output: "aaabbc"

// 35) Ek string ke characters ko randomly shuffle karo.
// Input: "abcd"
// Output (example): "cadb"  // random permutation

// 36) Ek string ke words ko reverse order me aur har word ko bhi reverse karo.
// Input: "hello world"
// Output: "dlrow olleh"
let str = "hello world";

function reverseWordsAndString(s) {
  // 1. Split string into words
  let words = s.split(" ");

  // 2. Reverse each word
  for (let i = 0; i < words.length; i++) {
    let reversedWord = "";
    for (let j = words[i].length - 1; j >= 0; j--) {
      reversedWord += words[i][j];
    }
    words[i] = reversedWord;
  }

  // 3. Reverse the order of words
  let result = "";
  for (let i = words.length - 1; i >= 0; i--) {
    result += words[i];
    if (i > 0) result += " ";
  }

  return result;
}

console.log(reverseWordsAndString(str)); // Output: "dlrow olleh"

// 37) Ek string me first repeating character find karo.
// Input: "abca"
// Output: "a"  // first char that repeats

let str = "shidi";

function reverseWordsAndString(s) {
  // 1. Split string into words
  let words = s.split("");
  let rep = "";
  let seen = "";
  for (let i = 0; i < words.length; i++) {
    // console.log(words)
    let found = true;

    for (let j = 0; j <= rep.length - 1; j++) {
      //   console.log("hsahhgs",rep[j])
      if (rep[j] == words[i]) {
        seen += words[i];
        found = false;
        break;
      }
    }
    if (found) {
      rep += words[i];
    } else {
      break;
    }
  }

  return seen;
}

console.log(reverseWordsAndString(str)); // Output: "dlrow olleh"

let str = "shidid";

function lastNonRepeatingChar(s) {
  let freq = {}; // object to store frequency of each character

  // 1. Count frequency of each character
  for (let i = 0; i < s.length; i++) {
    let ch = s[i];
    if (freq[ch] === undefined) {
      freq[ch] = 1;
    } else {
      freq[ch]++;
    }
  }

  // 2. Loop from end to start to find last non-repeating character
  for (let i = s.length - 1; i >= 0; i--) {
    if (freq[s[i]] === 1) {
      return s[i]; // last non-repeating character
    }
  }

  return null; // if all characters repeat
}

console.log(lastNonRepeatingChar(str)); // Output: "h"

// 38) Ek string me last non-repeating character find karo.
// Input: "swiss"
// Output: "w"  // last char that appears once
let str = "shidid";

function lastNonRepeatingChar(s) {
  let freq = {}; // object to store frequency of each character

  // 1. Count frequency of each character
  for (let i = 0; i < s.length; i++) {
    let ch = s[i];
    if (freq[ch] === undefined) {
      freq[ch] = 1;
    } else {
      freq[ch]++;
    }
  }
  console.log(freq);

  // 2. Loop from end to start to find last non-repeating character
  for (let i = s.length - 1; i >= 0; i--) {
    if (freq[s[i]] === 1) {
      return s[i]; // last non-repeating character
    }
  }

  return null; // if all characters repeat
}

console.log(lastNonRepeatingChar(str)); // Output: "h"

// 39) Ek string palindrome permutation check karo.
// Input: "carrace"
// Output: true  // can permute to "racecar"

// 40) Ek string me balanced brackets check karo.
// Input: "{[()()]}"
// Output: true

// --------------------
// 🔹 Object Advanced (15)
// --------------------

// 41) Ek object me deep equality check function likho.
// Input: a={x:1,y:{z:2}}, b={x:1,y:{z:2}}
// Output: true

let a = { x: 1, y: { z: 2 } },
  b = { x: 1, y: { z: 2 } };

function deepEqual(s, y) {
  if (s === y) return true;

  if (
    typeof s !== "object" ||
    s === null ||
    typeof y !== "object" ||
    y === null
  ) {
    return false;
  }

  let key1 = Object.keys(s);
  let key2 = Object.keys(y);

  if (key1.length !== key2.length) return false;

  for (let key of key1) {
    if (!deepEqual(s[key], y[key])) return false;
  }

  return true;
}

console.log(deepEqual(a, b)); // true

// 42) Ek object me circular reference detect karo.
// Input: let a = {}; a.self = a;
// Output: true  // circular detected

// 43) Ek object me nested key se value safely extract karna.
// Input: obj={a:{b:{c:5}}}, path="a.b.c"
// Output: 5  // safe getter returns value or undefined

// 44) Ek object ke saare keys ko camelCase me convert karo.
// Input: {"first_name": "Rahul", "last_name":"Gupta"}
// Output: { firstName: "Rahul", lastName: "Gupta" }
function toCamelCaseKey(str) {
  return str.replace(/_([a-z])/g, (_, char) => char.toUpperCase());
}

function keysToCamelCase(obj) {
  let newObj = {};
  for (let key in obj) {
    let newKey = "";
    for (let i = 0; i < key.length; i++) {
      let ch = key[i].charCodeAt(0);

      if (i == 0 && ch >= 97 && ch <= 122) {
        newKey += String.fromCharCode(ch - 32); // Convert first char to lowercase
      } else {
        newKey += key[i];
      }
    }

    newObj[newKey] = obj[key];
  }
  return newObj;
}

// Test
console.log(keysToCamelCase({ Firstname: "Rahul", Lastname: "Gupta" }));
// { firstname: "Rahul", lastname: "Gupta" }
function toCamelCaseKey(str) {
  return str.replace(/_([a-z])/g, (_, char) => char.toUpperCase());
}

function keysToCamelCase(obj) {
  let newObj = {};
  for (let key in obj) {
    let newKey = toCamelCaseKey(key);
    newObj[newKey] = obj[key];
  }
  return newObj;
}

// Test
console.log(keysToCamelCase({ first_name: "Rahul", last_name: "Gupta" }));
// { firstName: "Rahul", lastName: "Gupta" }

// 45) Ek object ke saare keys ko snake_case me convert karo.
// Input: {firstName:"Rahul", lastName:"Gupta"}
// Output: {"first_name":"Rahul","last_name":"Gupta"}
function toSnakeCaseKey(str) {
  return str.replace(/([A-Z])/g, "_$1").toLowerCase();
}

function keysToSnakeCase(obj) {
  let newObj = {};
  for (let key in obj) {
    let newKey = toSnakeCaseKey(key);
    newObj[newKey] = obj[key];
  }
  return newObj;
}

// Test
console.log(keysToSnakeCase({ firstName: "Rahul", lastName: "Gupta" }));
// { first_name: "Rahul", last_name: "Gupta" }
function toCamelCaseKey(str) {
  return str.replace(/_([a-z])/g, (_, char) => char.toUpperCase());
}

function keysToCamelCase(obj) {
  let newObj = [];
  for (let key of obj) {
    //  console.log(key)
    let newKey = "";
    for (let i = 0; i < key.length; i++) {
      let ch = key[i].charCodeAt(0);

      if (i == 0 && ch >= 97 && ch <= 122) {
        newKey += String.fromCharCode(ch - 32);
        // Convert first char to lowercase
      } else {
        newKey += key[i];
      }
    }
    // console.log(newKey)

    newObj[newObj.length] = newKey;
  }
  return newObj;
}

// Test
console.log(keysToCamelCase(["Firstname", "Rahul", "lastname", "Gupta"]));
// { firstname: "Rahul", lastname: "Gupta" }

// 46) Ek object ke keys ko alphabetical order me sort karo.
// Input: {b:2,a:1,c:3}
// Output: {a:1,b:2,c:3}  // ordering in representation

function sortKeys(obj) {
  let newObj = {};
  Object.keys(obj)
    .sort()
    .forEach((key) => {
      newObj[key] = obj[key];
    });
  return newObj;
}

// Test
console.log(sortKeys({ b: 2, a: 1, c: 3 }));
// { a:1, b:2, c:3 }

// 47) Ek object ke saare values ka sum nikalo.
// Input: {a:10,b:20,c:5}
// Output: 35
function sumValues(obj) {
  let sum = 0;
  for (let key in obj) {
    sum += obj[key]; // direct access
  }
  return sum;
}

console.log(sumValues({ a: 10, b: 20, c: 5 })); // 35

// 48) Ek object ko flatten karo (nested ko single level).
// Input: {a:{b:1}, c:2}
// Output: {"a.b":1,"c":2}

function flatten(obj, parentKey, res) {
  if (!res) res = {};
  if (!parentKey) parentKey = "";

  for (let key in obj) {
    let newKey = parentKey ? parentKey + "." + key : key;

    if (
      typeof obj[key] === "object" &&
      obj[key] !== null &&
      !(obj[key] instanceof Array)
    ) {
      flatten(obj[key], newKey, res);
    } else {
      res[newKey] = obj[key];
    }
  }
  return res;
}

console.log(flatten({ a: { b: 1 }, c: 2 }));
// { "a.b": 1, "c": 2 }

// 49) Ek object ko unflatten karo (flat se nested banao).
// Input: {"a.b":1,"c":2}
// Output: {a:{b:1}, c:2}

// 50) Ek object ke andar duplicate keys remove karo.
// (Note: JS object cannot have duplicate keys; if array of entries provided)
// Input: [["a",1],["b",2],["a",3]]
// Output: {a:3, b:2}  // last wins (example behavior)

function removeDuplicateKeys(entries) {
  let obj = {};
  for (let i = 0; i < entries.length; i++) {
    let key = entries[i][0];
    let value = entries[i][1];
    obj[key] = value; // overwrite last value
  }
  return obj;
}

console.log(
  removeDuplicateKeys([
    ["a", 1],
    ["b", 2],
    ["a", 3],
  ])
);
// {a:3, b:2}

// 51) Ek object ka hash banao (stringify + hash algo).
// Input: {a:1,b:2}
// Output: "e.g. '9b74c9897bac770ffc029102a200c5de'"  // example hash string
function freeze(obj) {
  // mark frozen flag
  obj._frozen = true;
}

function setProperty(obj, key, value) {
  if (obj._frozen) return; // ignore if frozen
  obj[key] = value;
}

let o = { x: 1 };
freeze(o);
setProperty(o, "x", 2);

console.log(o.x); // 1 (unchanged)

// 52) Ek object me property ko freeze aur check karo ki change hua ya nahi.
// Input: let o={x:1}; Object.freeze(o); o.x=2
// Output: o.x === 1  // true (change ignored in strict mode would throw)

// 53) Ek object me ek property delete karo bina delete keyword use kiye.
// Input: o={a:1,b:2}; // using destructuring
// Operation: const {a, ...rest} = o
// Output: rest => {b:2}

function deleteKey(obj, removeKey) {
  let newObj = {};
  for (let key in obj) {
    if (key !== removeKey) {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}

let o = { a: 1, b: 2 };
let rest = deleteKey(o, "a");
console.log(rest); // {b:2}

// 54) Ek object ko clone karo prototype safe way me.
// Input: o={a:1}; clone = Object.create(Object.getPrototypeOf(o)); copy props...
// Output: clone equals shallow copy of o

let a = { x: 1, y: { z: 2 } };

function SallowCopy(n) {
  if (typeof n != "object" || n == null) return n;
  let copy = n.constructor === Array ? [] : {};

  for (let key in n) {
    // console.log( SallowCopy(n[key]))
    copy[key] = SallowCopy(n[key]);
  }
  return copy;
}
let copy = SallowCopy(a);
copy.y.z = 33;

// 55) Ek object ke values ko unique banao agar array ke form me ho.
// Input: {a:[1,2,2], b:[2,3,2]}
// Output: {a:[1,2], b:[2,3]}  // unique arrays

let a = { a: [1, 2, 2], b: [2, 3, 2] };

function SallowCopy(n) {
  for (let key in n) {
    let sorts = [...new Set(n[key])];
    n[key] = sorts;
  }

  return n;
}

console.log(SallowCopy(a));

// --------------------
// 🔹 Functions & Closure (15)
// --------------------

// 56) Ek function likho jo curry function implement kare.
// Input: const add = (a,b) => a+b; curry(add)(1)(2)
// Output: 3

let a = { a: [1, 2, 2], b: [2, 3, 2] };

function SallowCopy(a) {
  return function (b) {
    return function (c) {
      return function (d) {
        return a + b + c + d;
      };
    };
  };
}
console.log(SallowCopy(0)(1)(2)(4));
// 57) Ek function likho jo partial application implement kare.
// Input: const add = (a,b,c)=>a+b+c; partial(add,1)(2,3)
// Output: 6

// 58) Ek function likho jo memoization implement kare.
// Input: memoizedFib(10)
// Output: 55  // faster than naive recursion

function memoize(fn) {
  let cache = {}; // store previous results

  return function (n) {
    if (cache[n] !== undefined) {
      console.log("Fetching from cache:", n);
      return cache[n];
    } else {
      console.log("Calculating result for:", n);
      let result = fn(n);
      cache[n] = result;
      return result;
    }
  };
}

// Expensive function (e.g., factorial)
function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

// Memoized factorial
let memoFactorial = memoize(factorial);

console.log(memoFactorial(5)); // Calculating result
console.log(memoFactorial(5)); // Fetching from cache
console.log(memoFactorial(6)); // Uses cache for factorial(5)

// 59) Ek function likho jo pipe implement kare.
// Input: pipe(f,g)(x) where f,g simple funcs
// Output: g(f(x))

// 60) Ek function likho jo compose implement kare.
// Input: compose(g,f)(x)
// Output: g(f(x))

// 61) Ek function likho jo once utility banaye (sirf ek baar chale).
// Input: const runOnce = once(()=>console.log('hi')); runOnce(); runOnce();
// Output: "hi" printed only once

// 62) Ek function likho jo retry kare failed function ko 3 baar.
// Input: unreliable API that fails twice then succeeds
// Output: final successful result after retries

// 63) Ek function likho jo delay kare execution ko given ms ke liye.
// Input: delay(1000).then(()=>console.log('done'))
// Output: "done" after ~1000ms

// 64) Ek function likho jo infinite curry function banaye (sum(1)(2)(3)() = 6).
// Input: sum(1)(2)(3)()
// Output: 6
function sum(a) {
  let total = a; // closure me store karega

  function inner(b) {
    if (b === undefined) {
      return total; // agar koi argument nahi mila to result return karo
    }
    total += b; // aur number add karo
    return inner; // phir se function return karo chaining ke liye
  }

  return inner;
}

// Example
console.log(sum(1)(2)(3)()); // 6
console.log(sum(5)(10)(15)(20)()); // 50
console.log(sum(100)()); // 100

// 65) Ek function likho jo function ko reverse arguments ke sath call kare.
// Input: const f=(a,b)=>[a,b]; flip(f)(1,2)
// Output: [2,1]
function flip(fn) {
  return function (...args) {
    return fn(...args.reverse());
  };
}

const f = (a, b) => [a, b];
console.log(flip(f)(1, 2)); // [2,1]

// 66) Ek function likho jo function ke calls ko count kare.
// Input: const counted = countCalls(fn); counted(); counted();
// Output: count = 2 (accessible via counted.count)
function countCalls(fn) {
  function wrapper(...args) {
    wrapper.count++;
    return fn(...args);
  }
  wrapper.count = 0; // closure me counter
  return wrapper;
}

const hello = () => "hi";
const counted = countCalls(hello);
counted();
counted();
console.log(counted.count); // 2

// 67) Ek function likho jo random id generator ho closure ke sath.
// Input: gen() -> returns 'id_1', gen() -> 'id_2'
// Output: incrementing ids
function idGenerator() {
  let id = 0;
  return function () {
    id++;
    return "id_" + id;
  };
}

const gen = idGenerator();
console.log(gen()); // id_1
console.log(gen()); // id_2

// --------------------
// 🔹 Async & Promises (15)
// --------------------

// 71) Ek function likho jo custom Promise banaye scratch se.
// Input: new MyPromise((res)=>res(5))
// Output: resolves with 5

function MyPromise(executor) {
  let onResolve, onReject;
  let fulfilled = false,
    rejected = false;
  let value, reason;

  this.then = function (callback) {
    onResolve = callback;
    if (fulfilled) onResolve(value);
    return this;
  };

  this.catch = function (callback) {
    onReject = callback;
    if (rejected) onReject(reason);
    return this;
  };

  function resolve(val) {
    fulfilled = true;
    value = val;
    if (onResolve) onResolve(val);
  }

  function reject(err) {
    rejected = true;
    reason = err;
    if (onReject) onReject(err);
  }

  executor(resolve, reject);
}

// Test
let apicall = new MyPromise((resolve, reject) => {
  let data = false;
  if (data) resolve("data resolve");
  else reject("error data");
});

apicall
  .then((res) => console.log("Resolved:", res))
  .catch((err) => console.log("Rejected:", err));

// 72) Ek function likho jo Promise.allSettled implement kare.
// Input: [Promise.resolve(1), Promise.reject('err')]
// Output: [{status:'fulfilled',value:1},{status:'rejected',reason:'err'}]

function myAllSettled(promises) {
  return new Promise((resolve) => {
    let results = [];
    let completed = 0;

    promises.forEach((p, index) => {
      // Promise ko resolve karna, agar normal value ho to bhi
      Promise.resolve(p)
        .then((value) => {
          results[index] = { status: "fulfilled", value: value };
        })
        .catch((reason) => {
          results[index] = { status: "rejected", reason: reason };
        })
        .finally(() => {
          completed++;
          if (completed === promises.length) {
            resolve(results);
          }
        });
    });
  });
}

// Example usage:
const p1 = Promise.resolve(1);
const p2 = Promise.reject("err");
const p3 = 5; // normal value bhi handle ho jaayega

myAllSettled([p1, p2, p3]).then(console.log);

/* Output:
[
  { status: 'fulfilled', value: 1 },
  { status: 'rejected', reason: 'err' },
  { status: 'fulfilled', value: 5 }
]
*/

// 73) Ek function likho jo Promise.race implement kare.
// Input: [p1 resolves in 100ms with 1, p2 resolves in 50ms with 2]
// Output: 2 (winner of race)

function myPromiseRace(promises) {
  return new Promise((resolve, reject) => {
    for (let p of promises) {
      // Promise ko resolve/reject dono handle karna
      Promise.resolve(p).then(resolve).catch(reject);
    }
  });
}

// Example use:
const p1 = new Promise((res) => setTimeout(() => res(1), 100));
const p2 = new Promise((res) => setTimeout(() => res(2), 50));

myPromiseRace([p1, p2]).then(console.log); // Output: 2

// 74) Ek function likho jo Promise.any implement kare.
// Input: [reject, resolve(3)]
// Output: 3 (first fulfilled)
function myPromiseAny(promises) {
  return new Promise((resolve, reject) => {
    let rejections = [];
    let pending = promises.length;
    if (pending === 0) {
      reject(new AggregateError([], "All promises were rejected"));
    }

    promises.forEach((p, i) => {
      Promise.resolve(p).then(
        (val) => {
          resolve(val); // jaise hi fulfill hua resolve kardo
        },
        (err) => {
          rejections[i] = err;
          pending--;
          if (pending === 0) {
            reject(
              new AggregateError(rejections, "All promises were rejected")
            );
          }
        }
      );
    });
  });
}

// Example:
let p1 = Promise.reject("err1");
let p2 = Promise.resolve(3);

myPromiseAny([p1, p2]).then(console.log).catch(console.error);
// Output: 3

// 75) Ek function likho jo sequential async tasks chalaye loop ke through.
// Input: tasks = [async1, async2]
// Output: results in order [res1, res2]
async function runSequential(tasks) {
  let results = [];
  for (let task of tasks) {
    let res = await task(); // pehle await, fir next
    results.push(res);
  }
  return results;
}

// Example tasks:
const async1 = () => new Promise((res) => setTimeout(() => res("first"), 1000));
const async2 = () => new Promise((res) => setTimeout(() => res("second"), 500));

runSequential([async1, async2]).then(console.log);

// Sequential API calls (ek ke baad ek)
async function fetchSequential() {
  try {
    let res1 = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    let data1 = await res1.json();
    console.log("First API Result:", data1);

    let res2 = await fetch("https://jsonplaceholder.typicode.com/posts/2");
    let data2 = await res2.json();
    console.log("Second API Result:", data2);

    return [data1, data2];
  } catch (err) {
    console.error("Error:", err);
  }
}

fetchSequential();

// 2) Parallel API calls (ek sath dono)

async function fetchParallel() {
  try {
    let [res1, res2] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/posts/1"),
      fetch("https://jsonplaceholder.typicode.com/posts/2"),
    ]);

    let data1 = await res1.json();
    let data2 = await res2.json();

    console.log("Both API Results:", [data1, data2]);
    return [data1, data2];
  } catch (err) {
    console.error("Error:", err);
  }
}

fetchParallel();

// Output after 1.5s: ["first", "second"]

// 76) Ek function likho jo parallel async tasks chalaye limit ke sath (concurrency control).
// Input: tasks x10, concurrency=3
// Output: executes max 3 at a time, final results array

async function callWithRetry(url, maxRetries = 3, delay = 5000) {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      let res = await fetch(url);

      if (!res.ok) throw new Error(`HTTP Error: ${res.status}`);

      let data = await res.json();
      console.log(`✅ Success on attempt ${attempt}`);
      return data; // success milte hi return
    } catch (err) {
      console.error(`❌ Attempt ${attempt} failed:`, err.message);

      if (attempt < maxRetries) {
        console.log(`⏳ Retrying in ${delay / 1000} seconds...`);
        await new Promise((res) => setTimeout(res, delay));
      } else {
        console.error("❌ All attempts failed.");
        throw err;
      }
    }
  }
}

// Call API
callWithRetry("https://jsonplaceholder.typicode.com/posts", 3, 5000)
  .then((data) => console.log("Final Data Length:", data.length))
  .catch((err) => console.error("Final Error:", err.message));

//    api ko cancle kerna 2 sec k baad

// 1. Controller create karo
const controller = new AbortController();
const signal = controller.signal;

// 2. fetch me signal pass karo
fetch("https://jsonplaceholder.typicode.com/posts", { signal })
  .then((res) => res.json())
  .then((data) => console.log("Data received:", data))
  .catch((err) => {
    if (err.name === "AbortError") {
      console.log("Fetch aborted!");
    } else {
      console.error("Fetch error:", err);
    }
  });

// 3. 2 seconds ke baad cancel karna
setTimeout(() => {
  controller.abort();
}, 2000);

// my code check 3 tiem appi call
async function apicall() {
  const response = await fetch("https://jsonplaceholder.typicode.com/postss"); // ✅ fixed URL
  if (!response.ok) {
    throw new Error(`HTTP Error: ${response.status}`);
  }
  return await response.json();
}

async function delayapicall(fn, times = 3, delay = 5000) {
  for (let attempt = 1; attempt <= times; attempt++) {
    try {
      let result = await fn();
      console.log("✅ Success:", result.slice(0, 2)); // show only first 2 posts
      return result;
    } catch (err) {
      console.error(`❌ Attempt ${attempt} failed:`, err.message);
      if (attempt < times) {
        console.log(`⏳ Retrying after ${delay / 1000}s...`);
        await new Promise((res) => setTimeout(res, delay));
      } else {
        console.error("❌ All attempts failed.");
        throw err;
      }
    }
  }
}

delayapicall(apicall, 3, 5000);

// 77) Ek function likho jo retry kare API ko exponential backoff ke sath.
// Input: flaky API
// Output: eventually succeed or final failure after attempts

//   Backoff ka matlab hai retry karte waqt thoda delay dena.
// Exponential backoff ka matlab hai har failed retry ke baad wait-time double karna.

async function retryWithBackoff(fn, retries = 3, delay = 1000) {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      return await fn();
    } catch (err) {
      if (attempt === retries) throw err;
      console.warn(`❌ Attempt ${attempt} failed. Retrying in ${delay}ms...`);
      await new Promise((res) => setTimeout(res, delay));
      delay *= 2; // exponential backoff
    }
  }
}

// Real API call
async function fetchPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

retryWithBackoff(fetchPosts, 3, 1000)
  .then((data) => console.log("✅ Got posts:", data.slice(0, 2)))
  .catch((err) => console.error("❌ Failed:", err.message));

// 78) Ek function likho jo timeout kare promise ko agar jyada delay ho.
// Input: promise that never resolves, timeout 1000ms
// Output: reject with TimeoutError after ~1000ms

function withTimeout(promise, ms) {
  return new Promise((resolve, reject) => {
    // 1. Ek timer set karte hain jo "ms" ke baad reject kar dega
    const timer = setTimeout(() => reject(new Error("⏰ TimeoutError")), ms);

    // 2. Agar original promise resolve ho gaya
    promise
      .then((val) => {
        clearTimeout(timer); // timer hata do
        resolve(val); // original value return karo
      })
      // 3. Agar original promise reject ho gaya
      .catch((err) => {
        clearTimeout(timer); // timer hata do
        reject(err); // uska error propagate karo
      });
  });
}

// 79) Ek function likho jo cancelable promise banaye.
// Input: let p = cancelable(fetch()); p.cancel();
// Output: p rejects or is cancelled; fetch aborted (if implemented)

function cancelableFetch(url) {
  const controller = new AbortController(); // 1. Controller banate hain
  const signal = controller.signal; // 2. Iska signal fetch ko dete hain

  // 3. Normal fetch call lekin signal ke sath
  const promise = fetch(url, { signal });

  // 4. Promise ke upar ek cancel method attach kar dete hain
  promise.cancel = () => controller.abort();

  return promise;
}
let p = cancelableFetch("https://jsonplaceholder.typicode.com/posts");

// 100ms ke andar cancel kar diya
setTimeout(() => p.cancel(), 100);

p.then((res) => res.json())
  .then((data) => console.log("✅ Posts:", data.slice(0, 2)))
  .catch((err) => console.error("❌ Error:", err.message));

// 80) Ek function likho jo debounce async tasks kare.
// Input: rapid calls to debouncedAsync()
// Output: only last call executed after wait

// 81) Ek function likho jo throttle async tasks kare.
// Input: frequent calls to throttled()
// Output: at most one call per interval

// 82) Ek function likho jo ek array of promises ko waterfall pattern me execute kare.
// Input: [p1->uses prev result, p2->uses p1 result, ...]
// Output: final chained result

// Waterfall executor function
async function waterfall(tasks, initialValue) {
  let result = initialValue;
  for (let task of tasks) {
    result = await task(result); // har task previous result lega
  }
  return result;
}

// Real API dependent tasks
const tasks = [
  // 1) Fetch user details
  async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const user = await res.json();
    console.log("User:", user.name);
    return user; // next task me ye jayega
  },

  // 2) Fetch posts of that user
  async (user) => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/users/${user.id}/posts`
    );
    const posts = await res.json();
    console.log("First Post:", posts[0].title);
    return posts[0]; // next task ko sirf first post bhej rahe
  },

  // 3) Fetch comments of that post
  async (post) => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${post.id}/comments`
    );
    const comments = await res.json();
    console.log("Comments on first post:", comments.length);
    return comments; // final result
  },
];

// Run waterfall with initialValue = null (kyunki pehle task ko koi input chahiye hi nahi)
waterfall(tasks, null).then((finalResult) => {
  console.log("Final Comments Data:", finalResult);
});

// --------------------
// 🔹 Miscellaneous (15)
// --------------------

// 86) Ek custom deep clone function likho without JSON.
// Input: {a:1,b:{c:2}}
// Output: cloned object equal but independent

let data = { a: 1, b: { c: 2 } };

function deepClone(n) {
  if (typeof n !== "object" || n == null) return n;

  let result = n.constructor === Array ? [] : {};

  for (let key in n) {
    console.log(key);
    result[key] = deepClone(n[key]);
  }
  return result;
}
let clonevggf = deepClone(data);

clonevggf.b.c = 66;
console.log(data);

// 87) Ek random number generator banao min aur max ke beech.
// Input: min=5, max=10
// Output: integer between 5 and 10 inclusive, e.g. 7

function randomInt(min, max) {
  // Math.random() → 0 <= x < 1
  // Math.floor(Math.random() * (max - min + 1)) + min → min to max inclusive
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Example
console.log(randomInt(5, 10)); // could be 5,6,7,8,9,10

// 88) Ek function likho jo number ko words me convert kare (123 → "one hundred twenty three").
// Input: 123
// Output: "one hundred twenty three"

function numberToWords(num) {
  const o = [
    "",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  const t = [
    "",
    "ten",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
  ];
  const s = [
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
  ];

  if (num === 0) return "zero";

  let res = "";
  if (num >= 1000) {
    res += o[Math.floor(num / 1000)] + " thousand ";
    num %= 1000;
  }
  if (num >= 100) {
    res += o[Math.floor(num / 100)] + " hundred ";
    num %= 100;
  }
  if (num >= 20) {
    res += t[Math.floor(num / 10)] + " ";
    num %= 10;
  } else if (num >= 10) {
    res += s[num - 10] + " ";
    num = 0;
  }
  if (num > 0) res += o[num];

  return res.trim();
}

// Example
console.log(numberToWords(7037)); // "one thousand two hundred thirty four"

// 89) Ek function likho jo factorial recursive aur iterative dono me nikale.
// Input: 5
// Output: 120


function deepClone(n) {
  if (n <= 0) return 1;

  return n * deepClone(n - 1);
}

console.log(deepClone(5));

// Iterative
function factorialIterative(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

// 90) Ek function likho jo fibonacci recursive aur iterative dono me nikale.
// Input: 7
// Output: 13  // 0,1,1,2,3,5,8,13 (7th if counting from 0 or 1 depending on definition)

// 91) Ek function likho jo LRU cache implement kare.
// Input: cache size 2; set(1,1); set(2,2); get(1) -> 1; set(3,3)
// Output: get(2) -> -1 (evicted)

// 92) Ek function likho jo debounce resize event ke liye banao.
// Input: window resize many times, debounce 200ms
// Output: handler runs only after 200ms of pause

// 93) Ek function likho jo web worker simulate kare JS me.
// Input: simulate heavy task off main thread with setTimeout/Message pattern
// Output: main thread not blocked; message returned when done

// 94) Ek function likho jo binary search tree implement kare.
// Input: insert [5,3,7,2,4]; inorder traversal
// Output: [2,3,4,5,7]

// 95) Ek function likho jo linked list implement karo.
// Input: push 1,2,3; toArray()
// Output: [1,2,3]

// 96) Ek function likho jo stack implement karo.
// Input: push 1, push 2, pop()
// Output: 2

// 97) Ek function likho jo queue implement karo.
// Input: enqueue 1, enqueue 2, dequeue()
// Output: 1

// 98) Ek function likho jo graph traversal kare (DFS, BFS).
// Input: graph adj list {0:[1,2],1:[2],2:[0,3],3:[3]}; start=2
// Output BFS from 2: [2,0,3,1]  // one possible order
// Output DFS from 2: [2,0,1,3]  // one possible order

// 99) Ek function likho jo matrix transpose kare.
// Input: [[1,2,3],[4,5,6]]
// Output: [[1,4],[2,5],[3,6]]

// 100) Ek function likho jo matrix multiplication kare.
// Input: A=[[1,2],[3,4]] , B=[[5,6],[7,8]]
// Output: [[19,22],[43,50]]
