function startdata(a,b){

    return a.toLowerCase().startsWith(b.toLowerCase())
        
        
    }
    console.log(startdata("My name is", "my"))

// ------------------or ---------
    function startdata(a,b){

        return a.split(" ").slice(0,1).join("") === b.split(" ").slice(0,1).join("")
            
            
        }
        console.log(startdata("My name is", "My"))