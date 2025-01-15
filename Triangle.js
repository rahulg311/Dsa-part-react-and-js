
//  Reverse Triangle 

function triangle(len){
    let str="\n";
    for(let i=0; i<=len;i++){
        for(let j=0; j<=i;j++){
            str=str+"*";
        }
        str=str+"\n";
    }
    return str
} 

console.log("Welcome to Programiz!",triangle(4));

//  input -- 4
//  output --  *
            // **
            // ***
            // ****
            // *****



//  Reverse Triangle 

function triangle(len){
    let str="\n*";
    for(let i=len; i>=0;i--){
        for(let j=i; j>=0;j--){
        str=str+"*";
        }
        str=str+"\n";
    }
    return str
} 

console.log("Welcome to Programiz!",triangle(10));

// input -- 5
// output --        ******
            //      ****
            //      ***
            //      **
            //      *

// create Pyramid

function generatePyramid(n) {

    let str="\n"
    for (let i=1;i<=n;i++) {
        for (let j=0;j<n-i;j++) {
        str=str+" "
        }
        for (let k=0;k<2*i-1;k++) {
        str=str+"*"
        }
        str=str+"\n"
    }
    return str
}

console.log("Welcome to Programiz!",generatePyramid(5));

// input -- 5
// output --        *
            //     ***
            //    *****
            //   *******
            //  *********




let data =6
let srt ="\n"
let dd =""
for(let i =0 ; i<data; i++){
    for(let j =1 ; j<data-i; j++){
        dd+= " "
}
for(let k =0 ; k<i; k++){
      dd+= "* "
    }
dd+= srt
    }

console.log(dd)