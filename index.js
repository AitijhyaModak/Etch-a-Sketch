let canvas = document.querySelector("#canvas");
let grid_size = 64;



//function for creating grids
function creategrids() {
    for (let i = 0; i < grid_size * grid_size; i++) {
        let minibox = document.createElement("div");
        /*minibox.style.border = "red solid 1px";*/
        minibox.style.width = String((500 - 1.6 * grid_size) / grid_size) + "px";
        minibox.style.height = String((500 - 1.6 * grid_size) / grid_size) + "px";
        minibox.classList.add("minibox");
        minibox.addEventListener("mouseover",draw);
        canvas.appendChild(minibox);
    }
}
creategrids();


// grid size selection
let grid_button = document.querySelector("#grid");
grid_button.addEventListener("click", ongridclick);
function ongridclick(event) {
    for (let i = 0; i < grid_size * grid_size; i++) {
        let minibox = canvas.querySelector("div");
        canvas.removeChild(minibox);
    }
    grid_size = prompt("Enter grid size. \nMax limit is 100.\nExample: Enter 70 for a size of 70*70", "64");
    creategrids();
}


//color selection
let rainbow_pressed = false;
let rainbow_button = document.querySelector("#rainbow");
let color = "red";
let red_colorbutton = document.querySelector("#red");
red_colorbutton.addEventListener("click", oncolorclick);
let green_colorbutton = document.querySelector("#green");
green_colorbutton.addEventListener("click", oncolorclick);
let blue_colorbutton = document.querySelector("#blue");
blue_colorbutton.addEventListener("click", oncolorclick);
let color_button_list = [red_colorbutton, green_colorbutton, blue_colorbutton, rainbow_button];

function oncolorclick(event) {
    for (let button of color_button_list) { button.classList.remove("pressed"); }
    rainbow_pressed = false;
    let colorbutton = event.srcElement;
    colorbutton.classList.toggle("pressed");
    if (colorbutton == red_colorbutton) color = "red";
    else if (colorbutton == blue_colorbutton) color = "blue";
    else color = "green";
}



rainbow_button.addEventListener("click", onrainbowclick)
function onrainbowclick(event) {
    for (let button of color_button_list) button.classList.remove("pressed");

    event.srcElement.classList.toggle("pressed");
    if (rainbow_pressed == true) rainbow_pressed = false;
    else rainbow_pressed = true;
}

function getcolor() {
    if (rainbow_pressed === false) return color;
    else color = getrainbowcolor();
    return color;
}
function getrainbowcolor() {
    let colorlist = ["violet", "indigo", "blue", "red", "yellow", "orange", "green"]
    let random_number = Math.floor(Math.random() * 7);
    return colorlist[random_number];
}


//drawing part
function draw(event) {
    let element = event.srcElement;
    element.style.background = getcolor();
}



//erase part
let erase_button = document.querySelector("#erase");
erase_button.addEventListener("click", eraseall);
function eraseall() {
    let miniboxes = document.querySelectorAll(".minibox");
    for (let minibox of miniboxes) {
        minibox.style.backgroundColor = "white";
    }
}