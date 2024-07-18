let promise = new Promise((reject,reslove)=>{
    let err = true;
    if(err) return reject("error occured");
    reslove("data is here");
});

promise
    .then((data)=>console.log(data))
    .catch(err=>console.log(err))