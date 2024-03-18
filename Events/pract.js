let modeBtn = document.querySelector("#mode");
let currMode = "light"; //dark

// 1 way to do thi
/*
modeBtn.addEventListener("click", () => {
    // console.log("You are trying to change mode");
    if(currMode ==="light"){
        currMode = "dark";
        document.querySelector("body").style.backgroundColor = "black";
        document.querySelector("button").style.backgroundColor = "red";
    } else {
        currMode = "light";
        document.querySelector("body").style.backgroundColor = "white";
        document.querySelector("button").style.backgroundColor = "yellow";

    }
    console.log(currMode);

}); */

// second way using style file
// accces the body
let body = document.querySelector("body");
modeBtn.addEventListener("click", () => {
    if(currMode ==="light"){
        currMode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
       
    } else {
        currMode = "light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
    console.log(currMode);

});