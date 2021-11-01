function Person() {
    

    this.age = 24;
    this.name = 'velvel';
    this.greet = function () {
        console.log(this.name + ' says hi!! and he is ' + this.age + 'years old') ;
    }
}

const person = new Person;// this instantiates an object in person and returns that object when summonend. This is what the new keyword does when summoning this function
person.greet();