//creating object: object have properties and method
// properties means varible and methods means function
// Note : If object & prototype have same method, object's method will be used.


/*
const student = {
    fullName: "Anurag",
    marks: 98.9,
    printMarks: function() {
        console.log("marks = ", this.marks);
        //this means student.marks
    }
} */

const employee = {
    calctax() {
        console.log("tax rate is 10%");
    },
    /*second way to write funtion
    clcTax: function () {
        console.log("tax rate is 10 %");
    } */
};
const karanArjun = {
    salary: 5000,
    calcTax () {
        console.log("Tax rate is 20% ");
    },
};
//Note : __proto__ is used to set prototype.
karanArjun.__proto__ = employee;