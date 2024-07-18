const promise1 = new Promise((reject,resolve)=>{
    let err = false;
    let data = "abcd"
    if(err) return reject("error occured")
    resolve(data)
}

);
promise1
    .then((data)=>{
        console.log(data);
    })
    .catch(err=>console.log(err))

// promise