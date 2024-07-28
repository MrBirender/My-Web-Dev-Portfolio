class student{
    constructor(name, age){
        this.name = name;
        this.age = age;
        this.sayHai = function(){
            console.log("Hai I am", this.name ,"what about you?")
        }
    }
    // sayHai(){
    //     console.log("Hai I am", this.name ,"what about you?")
    // }
}

let s1 = new student('birender', 25)
console.log(s1)
s1.sayHai()