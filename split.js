const data = "RahulRahulGuptaRahul";
//  output Rahul_Rahul_Gupta_Rahul

function splitByUppercase(str) {
    const result = [];
    let currentWord = str[0];
    for(let i =1; i< str.length; i++) {
        // if(str[i]>="A"  && "Z" <=str[i]){
            if (str[i] >= 'A' && str[i] <= 'Z') {
                result.push( currentWord+"_")
                currentWord =str[i]
            }else{
                currentWord +=str[i]
            }
         
        
    }  
    result.push(currentWord)
    return result

}

const result = splitByUppercase(data);
console.log(result.join(""));



// const data = "RahulGuptaDelhi"

let parts = [];
let currentPart = "";

for(let i = 0; i < data.length; i++) {
    if (data[i] >= "A" && data[i] <= "Z") {
        if (currentPart) {
            parts.push(currentPart);
        }
        currentPart = data[i];
    } else {
        currentPart += data[i];
    }
}

if (currentPart) {
    parts.push(currentPart);
}

console.log(parts);


// const data = "RahulGuptaDelhi"
// let result =""

for(let i=0; i<=data.length-1; i++){
    if(i > 0 && data[i] == data[i].toUpperCase()) {
        // console.log(data[i])
        result += "_"
    }
    result +=data[i]
}
console.log(result)