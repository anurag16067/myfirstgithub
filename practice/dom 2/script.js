/* Attributes
. getAttribute(attr) // to get the attribute value
. setAttribute(attr,value) //to set new attribute */
// accessing attributes from div
// let div = document.querySelector("div");
// console.log(div);

// let id = div.getAttribute("id");
// console.log(id)
// let name = div.getAttribute("name");
// console.log(name)

// //accessing attributes of paragraph

// let para = document.querySelector("p");
// // console.log(para.getAttribute("class"));
// //changing class of paragraph
// console.log(para.setAttribute("class", "newClass"));

// to acess style in javascript we use Node.style 
// let div = document.querySelector("div");

// changing colour of div using js 
// div.style.backgroundColor = "green";
// div.style.backgroundColor = "purple";
// div.style.fontSize = "25px";
// div.innerText = "Hello";
//hide div
// div.style.visibility = "hidden" 

//insert elements
let newBtn = document.createElement("button");
newBtn.innerText = "click me!";
console.log(newBtn);

let div = document.querySelector("div");
// div.append(newBtn); //add button at end of div(INSIDE)
// div.prepend(newBtn); // add button at starting of div(INSIDE)
// div.before(newBtn) //add button before node(OUTSIDE)
// div.after(newBtn); //add button after node(OUTSIDE)

//adding button after paragraph then first select para from queryselector
let p = document.querySelector("p");
p.after(newBtn);

//creating new heading using js
let newHeading = document.createElement("h1");
newHeading.innerHTML = "<i>Hi, I am new!</i>";

document.querySelector("body").prepend(newHeading);

// delect operation through javascript
let para = document.querySelector("p");
para.remove()
newHeading.remove();



