class Course {
    constructor(title, length, price) {
        this.title = title;
        this.length = length;
        this.price = price;
    }

    value() {
        const [min] = this.length.split(' ');
        this.min = min;
        const totalMinutes = (((parseInt(min)) / (this.price)) * 60/100);
        const actualMinutes = `${totalMinutes.toFixed(2)} min`;
        console.log(`For every dollar that you paid you will receive ${actualMinutes}  of high quality content`)
    }

    courseDescription() {
        const desc = `You got an amazing course. The title is ${this.title}. You will get ${this.min} min of high
        quality content for the $${this.price} that you paid.
        `;
        return desc.replace(/(\r\n|\n|\r)/gm," ").replace(/\s+/g," ");
    }
}

class PracticalCourse extends Course{
    constructor(title, length, price, numOfExcercises) {
        super(title, length, price);
        this.numberOfExcercises = numOfExcercises;
    }
}

class TheoreticalCourse extends Course {
    constructor(title, length, price) {
        super(title, length, price);
    }

    publish() {
        return 'Publish method for the Theoretical course';
    }

    
 }

// const course1 = new Course('JS', '100 min', 145.88)
// const course2 = new Course('ROR', '150 min', 195.88)
// console.log(course1, course2);
// console.log(course1.value(), course1.courseDescription())
// console.log(course2.value(), course2.courseDescription())


const course3 = new PracticalCourse('Intro to React', '167 min', "$999", 18);
console.log(course3);
const course4 = new TheoreticalCourse('Learninng Java', '345 minutes', '$4456')
console.log(course4.publish());

