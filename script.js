console.log("Hello pyare dunia");
console.log(window);
window.console.log("Hello ji");
console.dir(document.body);  //dir print it with properties
console.log(document.body);

// DOM is way to access htm through javscript

// 1 using their id
let heading = document.getElementById("heading") //h1
console.dir(heading); // use dir as h1 is object

// 2 using class 
let hero = document.getElementsByClassName("hero") //return html collection
console.dir(hero);
console.log(hero);
//3 using with tag name
let paras = document.getElementsByTagName("p");
console.dir(paras);

// 4 by query selector return nodelist
//document.querySelector("myID/MyClass/tag") return first element
//document.querySelectorAll("myId/myClass/tag") // return a nodeList
let FirstEle = document.querySelector("p") // give 1st element of p
console.dir(FirstEle);
let allEle = document.querySelectorAll("p"); // when requered all element
console.dir(allEle);
let firtel = document.querySelector(".hero"); //class
console.dir(firtel)
let allele = document.querySelectorAll(".hero") //use # for id and . for class
console.dir(allele)

let div = document.querySelector("div");
console.dir(div);
let heading1 = document.querySelector("h1");




