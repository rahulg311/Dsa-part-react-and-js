const data = "my name is kasaudhan rahul kuamar"

// let vvs =data.toUpperCase();
let longword =""
let dd =data.split(" ")

let ss =dd.map((item)=>{
    let dds =item.replace(item[0],item[0].toUpperCase() )
    let s ="_"
    return dds+s
})
console.log(ss.join(""))

// output
// My_Name_Is_Kasaudhan_Rahul_Kuamar_