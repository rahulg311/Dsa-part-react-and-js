function SimpleIntrest(p,r,t){
    // Simple interest is calculated with the following formula: S.I. = (P × R × T)/100, where P = Principal, R = Rate of Interest in % per annum, and T = Time, usually
    return (p*r*t)/100
}
console.log(SimpleIntrest(1000,5,3))