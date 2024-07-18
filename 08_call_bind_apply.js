const obj1 = {
    name:"lalit",
    printName:function(extra){
        console.log(this.name,extra);
    }
}

const obj2 = {
    name:"aman"
}
// using bind method
let fun = obj1.printName.bind(obj2,"abc");
fun();

// using call 
obj1.printName.call(obj2,"hello");

// using apply
obj1.printName.apply(obj2,["hey"])