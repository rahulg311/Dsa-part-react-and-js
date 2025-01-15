
class Stack{
    constructor(){
        this.item=[];
    }
    
    // add element
    add(el){
        return this.item.push(el);
    }
    
    // remove element 
    remove(){
        if(this.item.length>0){
            return this.item.pop();
        }
    }
    
    isEmpty(){
        return this.item.length==0     
    }
    
    // view last element 
    peek(){
        return this.item[this.item.length-1]
    }
    
    size(){
        return this.item.length
    }
    
    clear(){
        this.item=[]
    }
}

let stack= new Stack();
let add = stack.add(5)
let add1 = stack.add(9)
let size= stack.size()
let isEmpty= stack.isEmpty()
let lastEl= stack.peek();
let remove= stack.remove()
    stack.clear();

console.log("Welcome to Programiz!",add,add1,size,lastEl,isEmpty,remove);