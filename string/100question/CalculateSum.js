function cal(arr) {
    let sum = 0;
    sum = arr.reduce((a, b) => a += b * b)
    return sum
}
console.log(cal([1, 2, 3]))