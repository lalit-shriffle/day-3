const obj = {
    name:"lalit"
}

console.log(obj.hasOwnProperty("name"));

const keys = Object.keys(obj);
console.log(keys);
const values = Object.values(obj);
console.log("values ",values);

// creates a new object as  prootype of new object
const obj2 = Object.create(obj);
console.log(obj2.__proto__);

delete obj.name;
obj.age = 12;
console.log(obj);

console.log("is equal : ",obj===obj2);

const obj3 = obj;
obj3.city="indore"
console.log(obj3===obj);
console.log(Object.is(obj3,obj));

