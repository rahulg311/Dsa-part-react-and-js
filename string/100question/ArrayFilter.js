const data = [
    {
        name:"rahul",
        age:23,
        projectid:2
    },
    {
        name:"ankit",
        age:13,
        projectid:3
    },{
        name:"kumar",
        age:8,
        projectid:3
    },{
        name:"pansnu",
        age:29,
        projectid:4
    },{
        name:"nikete",
        age:36,
        projectid:5
    }
    ]
    
    function SearchData(values){
        console.log( typeof values)
    let filterVal = data.filter((item) =>Object.values(item).includes(values.toLocaleLowerCase()))
        console.log(filterVal)
        
    }
    
    console.log(SearchData("Pansnu"))