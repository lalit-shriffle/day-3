function fn(){
    let a =10;
    return ()=>{
        console.log(a);
    }
}

const myFn = fn();
myFn();