// Event handling in js
// syntex :
/*nod.event = () => {
    //handle event
}*/
/*note-1 : priority of js handing is more than inline handling 
2 : last hander is overright on other*/
let btn1 = document.querySelector("#btn1");
/*btn1.onclick = () => {
    console.log("btn1 was clicked");
    let a = prompt("Enter your age :");
    console.log(`your age is ${a}`);
}*/

/*let box = document.querySelector("div");
box.onmouseover = () => {
    console.log("You have reached on target div");
}*/

/*Event object:
it is a special object that has detail about the event.
All event handlers have access to the Event object's properties and method
syntex:
node.event = (e) => {
    //handle here. e is event object
} */
/*btn1.onclick = (evt) => {
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientY, evt.clientX)
};*/

/*Event listeners : 
Syntex : 
node.addEventListener(event, callback)
node.removeEventListener(event,callback) removing callback passed
Note : the callback reference should be same to remove*/
btn1.addEventListener("click", (evt) => {
    console.log("button1 was clicked -handler1");
    // console.log(evt);
    // console.log(evt.type)
    
    
});
btn1.addEventListener("click", () => {
    console.log("button1 was clicked -handler2");
});

const hander3 = () => {
    console.log("button1 was clicked -handler3");
};
btn1.addEventListener("click", hander3);
btn1.addEventListener("click", () => {
    console.log("button1 was clicked -handler4");
});
//removing handers
btn1.removeEventListener("click", hander3);

