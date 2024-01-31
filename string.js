// string
let str = "ApnaCollege";
let str2 = "Shradha";

// Template Literals is used to print paragraph in simple way
let specilString = `This is a template literal`;
console.log(specilString)
console.log(typeof specilString)

let obj = {
    item: "pen",
    price: 10,
};
// complex way to print
console.log("the cost of", obj.item, "is", obj.price, "ruoees");
// easy way using template literal
let output = `the cost of ${obj.item} is ${obj.price} rupees`;
console.log(output);

// Escape character \n used to give next line in string
console.log("Anurag\nKumar");
// tab space \t is used to give tab in between word
console.log("Anurag \t Kumar");
let str1 = "Apna\tCollege"; // Expected 13 character but \t is treated 1 character
console.log(str1.length);

// string method all these method donot change original string return new string
/*These are build in function in manipulate a string
String is immutable in javascript
str.toUpperCase()
str.toLowerCase()
str.trim() is used to remove all whitespace from end and start
str.slice(star,end?) used to return part of string. end is excluded
str1.concate(str2) used to join str2 with str1
str.replace(searchVal,newVal)
str.charAt(idx)*/
let str3 = "Anurag Kumar";
let newstr3 = str3.toUpperCase();
console.log(str3.toUpperCase());
console.log(str3.toLowerCase());
console.log(str3.trim());
console.log(newstr3);
console.log(str3.slice(0,5));
console.log(str3.slice(0));

// Practice Question
let username = prompt("Enter your full name");
console.log("@"+username+username.length);
console.log(`@${username}${username.length}`);

