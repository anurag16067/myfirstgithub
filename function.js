function sum (n,m){
    console.log(n+m);
}
sum(4,5);
/*m, n is funtion parameter are local variable */

/*Arrow Function--> Compact way of writing a function
const functionName = (param1, param2....) => {
    do code
} */
// sum function
const Arrowsum = (a,b) => {
    return (a+b);
}
// Multiplication arrow function
const ArrowMul = (a, b) => {
    return (a*b);
}

// practice problem
/* create a arrow function that count number of vowel in string */
function countVowels(str){
    let count = 0;
    for(const char of str) {
        if(char === "a" || char === "e" || char === "i" || char === "o" || char == "u"){
            count++;
        }
        // console.log(char);
    }
    console.log(count);
}
// Arrow function for above problem
const countVow = (str) => {
    let count = 0;
    for(const char of str) {
        if(char === "a" || char === "e" || char === "i" || char === "o" || char == "u"){
            count++;
        }
        // console.log(char);
    }
    console.log(count);

}

/*forEach Loop in Arrays
arr.forEach(callBackFunction)
Call back function : Here it is a function to execute for each element in the array.
A callback function is passed as an argument to another function
arr.forEach( val ) => {
    console.log(val);
} 
In javascript function call be passed a parameter*/

// let arr = [1,2,3,4,5];
let arr = ["Delhi", "Mumbai", "Pune", "Banglore"];
arr.forEach(function printVal(val){
    console.log(val);

});
 // implement using arrow function
arr.forEach((val, idx, arr) => {
    console.log(val.toUpperCase(), idx, arr);
});
// forEach is used only for array
/*Q. What is higher Order Function/Method?
Function which take parameter as function or return as function is called higher order function */

// Practice problem
/*Q. For a given array of numbers, print the square of each value using the forEach loop */
let nums = [2,3,4,5,6];
nums.forEach((num) => {
    console.log(num*num);
})
// second way
let calcSquare = (num) => {
    console.log(num*num);
};
nums.forEach(calcSquare);

//

/* Map is used to create new array with the results of some operation.
the value its callback returns are used to for.
Map is used to create new array using*/
console.log("What is map");
let num = [78, 89, 90];
num.map((val) =>{
    console.log(val);
})
let newArr = num.map((val) =>{
    return val;
})
console.log(newArr);
/*Filter is used to create a new array of elements that give true for a condition/filter

let newArr = arr.filter((val) => {
    return val % 2 == 0;
})*/
let arr1 = [1,2,3,4,5,6,7];
let evenarr = arr1.filter((val) => {
    // return val % 2 === 0;  //even
    return val % 2 !== 0; //odd
})
console.log(evenarr);

console.log("Reduce array method");
/*Reduce: Performs some operations and reduce the array to a single value. */
const output = arr1.reduce((prev, curr) => {
    // return pre + curr;
    // return prev < curr ? prev : curr; // return smallest
    return prev > curr ? prev : curr; // return larger

    return 
});
console.log(output);

console.log("Practice problems");

// find all marks with greater than 90
let marks = [20, 60, 94, 91, 80, 95];
let newmark = marks.filter((val) => {
    return val > 90;
});
console.log(newmark);

//take number create array 1 to n then sum it and product of all number
let n = prompt("Enter a number: ");
let ar = [];
for(let i=0; i<n; i++){
    ar[i] = i+1;
}
let sum1 = ar.reduce((x,y) => {
    // return x+y; 
    return x*y;
});
console.log(sum1);





