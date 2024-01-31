// Alert is used to print one time notification on webpage
// prompt() is used to take input from user
// prompt alway return string whatever user will give input
alert("Hello how are you?");
let name = prompt("Enter your name: ");
console.log(name);
let number = prompt("Enter a number: ");
if(number%5===0){
    console.log("Number is Multiple of 5");
}
else{
    console.log("Number is not multiple of 5");
}
let score = prompt("Enter your score");
let grade;
if(score >= 90 && score <= 100){
    grade = "A";
}
else if (score >= 80 && score <= 89){
    grade = "B";
}
 console.log(grade);
