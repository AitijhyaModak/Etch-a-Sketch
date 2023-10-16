let drawing_box = document.querySelector("#box");
drawing_box.style.height = "200px";
drawing_box.style.width = "200px";

let grid_size = 16;
//creating the drawing box
let created;

for(let i=1;i<=256;i++)
{   
    created = document.createElement("div");
    created.style.border = "solid green 1px";
    created.style.width = "10.9px";
    created.style.height = "10.9px";
    created.classList.add("minibox");
    created.addEventListener("click",onclick);
    drawing_box.appendChild(created);
}

function onclick(event)
{   
    console.log(event);
    let element = event.srcElement;
    element.style.background_color = "blue";
}