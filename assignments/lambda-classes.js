// CODE here for your Lambda Classes
//"Master" Person class
class Person {
    constructor(attr) {
        this.name = attr.name;
        this.age = attr.age;
        this.location = attr.location;
    }
    speak() {
        console.log(`Hello, my name is ${this.name}, I am from ${this.location}.`)
    }
}
//Instructor class inherits Person
class Instructor extends Person {
    constructor(attr) {
        super(attr);
        this.specialty = attr.specialty;
        this.favLanguage = attr.favLanguage;
        this.catchPhrase = attr.catchPhrase;
    }
    demo(subject) {
        console.log(`Today we are learning about ${subject}.`)
    }
    gradeAssignment(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}.`)
    }
    adjustGrade(student) {
        console.log(`${student.name}'s grade before: ${student.grade}`);
        let num = Math.floor(Math.random() * 99) + 1;
        num *= Math.floor(Math.random() * 2) == 1 ? 1 : -1;
        console.log(`${this.name} adds ${num} points.`);
        let newGrade = student.grade;
        newGrade += num;
        console.log(`${student.name}'s new grade: ${newGrade}. `)
        if (student.grade > 70) {
            console.log("You've graduated already, get out of here!");
        } else {
            if (newGrade > 70) {
                console.log(`Congratulations, ${student.name}! You've graduated from lambda! You're the bee's knees homie!`);
            } else {
                console.log("Keep trying more assignments to bring your grade up");
            }
        }
    }
}
//Student class inherits Person
class Student extends Person {
    constructor(attr) {
        super(attr);
        this.previousBackground = attr.previousBackground;
        this.className = attr.className;
        this.favSubjects = attr.favSubjects;
        this.grade = 50;
    }
    listsSubjects() {
        this.favSubjects.forEach(function (item) {
            console.log(item)
        })
    }
    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}.`)
    }
    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}.`)
    }
}
//ProjectManager class inherits Instructor
class ProjectManager extends Instructor {
    constructor(attr) {
        super(attr);
        this.gradClassName = attr.gradClassName;
        this.favInstructor = attr.favInstructor;
    }
    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @channel standy times!`);
    }
    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}.`);
    }
}


const jeff = new Student({ name: "Jeff", favSubjects: ["JFV", "Nev"], location: "Jamaica" });

const mason = new Instructor({ name: "Mason", location: "New York" });

const rebecca = new ProjectManager({ name: "Rebecca", location: "St Louis" });

jeff.speak();
rebecca.speak();
mason.speak();
jeff.PRAssignment("Django");
mason.demo("C#");
rebecca.debugsCode(jeff, "C#")
mason.adjustGrade(jeff);
mason.adjustGrade(jeff);
mason.adjustGrade(jeff);
mason.adjustGrade(jeff);