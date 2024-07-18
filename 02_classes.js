class Animal {

    constructor(name,age){
        this.name = name;
        this.age = age;

    }

    printInfo(){
        console.log(this.name , this.age);
    }
}




class Cat extends Animal {
    constructor(name,age,legs){
        super(name,age);
        this.legs = legs;
    }


}

const cat1 = new Cat("caty",3,4);
cat1.printInfo();

class Dog extends Cat{
    constructor(name,age,legs,sound){
        super(name,age,legs);
        this.sound = sound;
    }
    printInfo(){
        console.log(this.name,this.age,this.legs,this.sound);
    }

}

const dog1 = new Dog("dogy",2,4,"whoa");

dog1.printInfo()