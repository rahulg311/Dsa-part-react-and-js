// A subarray is a contiguous (consecutive) portion or slice of an array. In other words,
//  a subarray is obtained by selecting a range of elements from the original array, 
// where the elements are positioned one after the other in the same order as they appear in the original array.

// exampale maximam sum of subaaray
 var maxsubarray = [2,3,-2,1,-2,-5,-2,7]
 function maxdata(Suba){
    let sum =Suba[0] 
    for(let i=1; i<Suba.length; i++){
        //  check the value intial & previus sum  value compare  maxiam value
        Suba[i]=  Math.max(Suba[i], Suba[i]+Suba[i-1])
        sum= Math.max(sum,Suba[i] )

    }
    return sum

 }
console.log(maxdata(maxsubarray))

// output = 7



// find the maxmaim number in array
let data = [8, 4, 2, 6, 9, 3];
//   let max =Math.min(...data)
//   console.log(max)
let max = data[0]

for(let i =0 ; i<data.length; i++){
    if(data[i]>max){
        max= data[i]
    }
}
console.log(max)
