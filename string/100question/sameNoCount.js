function data(a,b){
    let actData=[]
    for(let i=a; i<=b; i++){
        let strData = String(i).split("")
        let dub =[...new Set(strData)]
        if(dub.length ==1 && strData.length>1 ){
            actData.push(i)
        }
        
       
    }
    return actData
    
}
console.log(data(1,1000))