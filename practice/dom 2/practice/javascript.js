// Question 1
let newBtn = document.createElement("button");
newBtn.innerText = "Click me!";
newBtn.style.backgroundColor = "red";
newBtn.style.color = "white";
document.querySelector("body").prepend(newBtn);

// question 2
let para = document.querySelector("p");
// para.setAttribute("class", "newClass"); //it will overwrite
para.classList.add("newClass");