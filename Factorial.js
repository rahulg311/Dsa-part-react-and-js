function fac(n){
    if(n<=0) return 1
    return n*fac(n-1);
}

console.log("factorial--",fac(5))

// input -- 5
// output -- 120