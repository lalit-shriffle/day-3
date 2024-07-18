const arr = [1,3,4,2,4,5,6,7];

// for each
let sum =0;
const arr1 = arr.forEach((ele)=>{
    sum+=ele;
});

console.log(sum);

// map - doing multiplication by 2
const result = arr.map((ele)=>{
    return ele*2
})
console.log(result);

console.log(arr.sort());

// filter method
const result2 = arr.filter((ele)=>{
    return ele%2===0
});

console.log(result2);


// slice methods
const result3 = arr.slice(2,10);
console.log("result",result3);

//splice method
const resulst4 = arr.splice(2,);
// console.log(isNaN('NaN'));
// console.log(isNaN(NaN));
// console.log(isNaN(undefined));
// console.log(isNaN(null));


let text1 = "ab";
let text2 = "cd";
let result4 = text1.localeCompare(text2);
console.log(resulst4);