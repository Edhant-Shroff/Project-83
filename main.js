canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

var oldX;
var oldY;

var width = screen.width;
new_width = screen.width - 50;
new_height = screen.height - 300;

if (width < 992) {
    document.getElementById("myCanvas").width = new_width;
    document.getElementById("myCanvas").height = new_height;
    document.body.style.overflow = "hidden";
}

canvas.addEventListener("touchstart", myTouchStart);

function myTouchStart(e) {
    oldX = e.touches[0].clientX - canvas.offsetLeft;
    oldY = e.touches[0].clientY - canvas.offsetTop;
}

canvas.addEventListener("touchmove", myTouchMove);

function myTouchMove(e) {
    currentX = e.touches[0].clientX - canvas.offsetLeft;
    currentY = e.touches[0].clientY - canvas.offsetTop;
    var Color = document.getElementById("color").value;
    var Width = document.getElementById("width").value;

    ctx.beginPath();

    ctx.strokeStyle = Color;
    ctx.lineWidth = Width;
    ctx.moveTo(oldX, oldY);
    ctx.lineTo(currentX, currentY)
    ctx.stroke();

    oldX = currentX;
    oldY = currentY;
}

function clear() { console.log("hi");
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}