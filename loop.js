//print 1 to n;
/*
let n =  prompt("Enter a number: ");
for(let i=1; i<=n; i++){
    console.log("i = ", i);
}
// using while loop
console.log("Using while loop");
let i = 1;
while(i<=n){
    console.log("i = ", i);
    i++
}
console.log("Using do while loop");
let j = 1;
do{
    console.log("i = ",j);
    j++;

}while(j<=n)

// For-of loop is used to do iteration through all the character of string
console.log("For-of loop");
let str =  "Apnacollege";
for( let i of str){
    console.log("i=", i);
}
console.log("For-in loop");
//In this we will get key value of object
let student = {
    name: "Anurag",
    age: 20,
    cgpa: 7.6,
    isPass: true,
};
for(let i in student){
    console.log("Key=",i, "Value=",student[i]);
}

*/

// Practice questions
// practice Questionn2
let gameNum = 25;
let userNum = prompt("Guess the number : ");
while(userNum != gameNum){
    userNum = prompt("You enter wrong number. Guess again : ");
}
console.log("Congratulations, you entered the right number");

