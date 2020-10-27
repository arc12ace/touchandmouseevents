var canvas=document.getElementById("myCanvas")
ctx=canvas.getContext("2d")

var color="red"

var mouseEvent=""
var last_x, last_y, current_x, current_y

var width=3

canvas.addEventListener("mouseup", mu);
function mu(e){
    mouseEvent="mouseUp";
}

canvas.addEventListener("mouseleave", ml);
function ml(e){
    mouseEvent="mouseLeave";
}
canvas.addEventListener("mousedown", md);
function md(e){
    mouseEvent="mouseDown";
    color=document.getElementById("colorinput").value
    width=document.getElementById("widthinput").value
}
canvas.addEventListener("mousemove", mm);
function mm(e){
    current_x=e.clientX-canvas.offsetLeft;
    current_y=e.clientY-canvas.offsetTop;

    if (mouseEvent=="mouseDown"){
        ctx.beginPath();
        ctx.lineWidth=width;
        ctx.strokeStyle=color;
        ctx.moveTo(last_x, last_y);
        ctx.lineTo(current_x, current_y);
        ctx.stroke();
    }
    last_x=current_x;
    last_y=current_y;
}
function clearArea(){
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); 
}
width=screen.width
var newWidth=screen.width-100
var newHeight=screen.height-300
if (width<992){
    document.getElementById("myCanvas").width=newWidth
    document.getElementById("myCanvas").height=newHeight
    document.body.style.overflow="hidden"
} 


canvas.addEventListener("touchstart", ts);
function ts(e){
    color=document.getElementById("colorinput").value
    Penwidth=document.getElementById("widthinput").value
    last_x=e.touches[0].clientX-canvas.offsetLeft;
    last_y=e.touches[0].clientY-canvas.offsetTop;
}
canvas.addEventListener("touchmove", tm);
function tm(e){
    current_x=e.touches[0].clientX-canvas.offsetLeft;
    current_y=e.touches[0].clientY-canvas.offsetTop;

    
        ctx.beginPath();
        ctx.lineWidth=Penwidth;
        ctx.strokeStyle=color;
        ctx.moveTo(last_x, last_y);
        ctx.lineTo(current_x, current_y);
        ctx.stroke();
    
    last_x=current_x;
    last_y=current_y;
}