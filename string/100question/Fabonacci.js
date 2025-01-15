// फिबोनाची संख्या (Fibonacci Number) एक संख्या श्रृंखला है जिसमें प्रत्येक संख्या अपने से पहले की दो संख्याओं का योग होती है। इस श्रृंखला की शुरुआत सामान्यतः 0 और 1 से होती है।

// फिबोनाची श्रृंखला इस प्रकार है:
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ..


function Fibonacci(num){
    let nu =num <=1? num : Fibonacci(num-1)+Fibonacci(num-2)
    return nu
//     if(num <=1){
//       return num
//     }else{
//       return  Fibonacci(num-1)+Fibonacci(num-2)
//     }

}

console.log(Fibonacci(5))