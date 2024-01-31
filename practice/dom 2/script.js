/* Attributes
. getAttribute(attr) // to get the attribute value
. setAttribute(attr,value) //to set new attribute */
// accessing attributes from div
let div = document.querySelector("div");
console.log(div);

let id = div.getAttribute("id");
console.log(id)
let name = div.getAttribute("name");
console.log(name)

//accessing attributes of paragraph

let para = document.querySelector("p");
// console.log(para.getAttribute("class"));
//changing class of paragraph
console.log(para.setAttribute("class", "newClass"));
