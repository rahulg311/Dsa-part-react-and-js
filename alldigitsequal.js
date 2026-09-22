



function MissingNo(a, b) {
    let result = [];

    for (let i = 10; i <= b; i++) {
        let strNum = String(i).split('');
        // Check if all digits are the same
      if(strNum.every((i)=>i ===strNum[0])){
          result.push(i)
      }
    }

    return result;
}

console.log(MissingNo(1, 10000));


// output [
//     11,   22,   33,   44,   55,   66,
//     77,   88,   99,  111,  222,  333,
//    444,  555,  666,  777,  888,  999,
//   1111, 2222, 3333, 4444, 5555, 6666,
//   7777, 8888, 9999
// ]

