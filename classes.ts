class Person {
    firstName : string;
    lastName : string;
    constructor(firstName : string, lastName : string){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName() {
        return this.firstName + " " +  this.lastName;
    }
}

var aPerson = new Person("John", "Smith");
console.log(aPerson.getFullName());