function NumberRanger(a, b, arr = []) {
  if (a <= b) {
    arr.push(a++);
    return NumberRanger(a + 1, b, arr);
  }

  return arr;
}

console.log(NumberRanger(2, 8));
