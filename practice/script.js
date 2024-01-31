// let h2 = document.querySelector("h2");
// console.dir(h2.innerText);
// h2.innerText = h2.innerText + " From apna college student"; //concatenate strin

let divs = document.querySelectorAll(".box");
console.log(divs);
//print individual div
console.log(divs[0]);
// transversing through divs with using loop
let idx = 1;
for(div of divs){
    // console.log(div.innerText); // it will give hmtl text
    div.innerText = `new unique value ${idx}`;
    idx++;
}
//changing inner text of individual text
/*divs[0].innerText = "new unique value 1"; // this can be done using loop
divs[1].innerText = "new unique value 2";
divs[2].innerText = "new unique value 3";
*/

