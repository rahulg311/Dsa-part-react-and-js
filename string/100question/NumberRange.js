function NumberRanger(a, b) {
  let arr = [];
  while (a <= b) {
    console.log(a);
    arr.push(a++);
  }
  // for(let i=a; i<=b; i++){

  //     console.log(i)
  // }
  return arr;
}

console.log(NumberRanger(2, 8));
