// array in javascript is mutable
let marks = [94, 37, 49, 23, 34, 89]; //its is object datatype
console.log(marks);
console.log(marks.length);

// Looping over an array
// For loop
let name = ["Anurag","Chandan", "Amit", "Shekhar", "Shrada khapra"];
for(let idx=0; idx<name.length; idx++){
    console.log(name[idx]);
}
// for of loop
console.log("Printing usinf for of loop");
for(let i of name){
    console.log(i);
}

// practice question find avg of marks of student
let mark = [85,97,44,37,76,60];
let sum = 0;
for(let i of mark){
    sum = sum + i;
}
let avg = sum/mark.length;
console.log(`Avg marks of the class =  ${avg}`);


// practice 2
let items = [250, 645, 300, 900, 50];
/*let i = 0;
for(let val of items){
  //  console.log(`Value at index ${i} = ${val}`);
    let offer = val/10;
    items[i] = items[i] - offer;
    console.log(`Value after offer = ${items[i]}`);
    i++;
}
*/
for(let i=0; i<items.length; i++){
    let offer = items[i]/10;
    items[i] -= offer;
}
console.log(items);

// Array method 
/*Push() add to end
pop() delete from end & return
toString() convert array to string
Concat() join multiple arrays & returns result
unshift() add to start
shift() delete from start & return
slice(startIdx, endIdx) return a piece of the array. orginal array will change
splice(startIdx, delCount, newEl1...) change original arrray(add,remove,replace)*/
 foodItems = ["Potato", "apple", "litchi", "Tomato"];
 console.log(foodItems);
foodItems.push("Banana", "Panner");
console.log(foodItems);
foodItems.pop();
console.log(foodItems);

// changing array to string
console.log(foodItems.toString());
let res = items.concat(foodItems);
console.log(res);
console.log(foodItems.slice(1,4));
let arr = [1,2,3,4,5,6,7];
// arr.splice(2,2,101,102); means 2 index se 2 element ko delete then add 101 and 102

arr.splice(2,0,101);

// Practice problem
/*Create an array to store companies--> "Bloomberg",Microsoft, Uber, Google, IBM, Netflix 
a. Remove the first company from the array
b. remove uber and add ola in its place
c. Add amazon at end*/

let arr1 = ["Bloomber","Microsoft","Uber","Google","IBM","Netflix"];
// arr1.shift(); //a
// arr1.splice(2,1,"Ola");
// arr1.splice(6,0,"Amazon");
arr1.push("Amazon");







