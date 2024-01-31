// arithmetic operator
let a = 5; //number
let b = 2;
console.log("a + b = ",a+b);
console.log("a = ", a, "& b = ", b);

// preincrement and predecrement
console.log("++a = ", ++a); // first increase then print 
console.log("a++ = ", a++); // first print then 

// Asignment operator
//a+=1 means a = a + 1, a*=2 means a = a*2

// comparison operator
let d = 5; // number
let c = "5" //string --> number
console.log("d == c", d == c); // true as string is first converted into number

// strict version equal to & type === check also datatype of both return false if datatype is different
console.log("d === c", d === c); 
console.log("d !== c", d !== c); 

/* logical operator 
 and &&
 logical OR ||
 logical NOT !*/
 console.log("Logical operators");
 console.log("Conditional  operators");
 let age = 45;
 if(age>=18){
    console.log("You can vote");
 }
 if(age<18){
    console.log("You can not vote");
 }
 let mode = "dark";
 let color;
 if(mode == "dark"){
    color = "black";
 }
 if(mode == "light"){
    color = "white";
 }
 console.log(color);

 let nam = "Anurag";
 let word;
 if(nam == "Sumit"){
    word = "Chutia";
 }
 else if (nam == "Anurag"){
    word = "Good"
 }
 console.log(word);
 console.log("Ternary Operator")
 // compact if else condition
 let result  = age >= 18 ? "Adult" : "not adult"; // : means nhi to
 console.log(result);










