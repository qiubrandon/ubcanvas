setTimeout(() => { let canvas = document.getElementById("myCanvas");
console.log(canvas)

let ctx = canvas.getContext("2d");

let coord = { x: 0, y: 0 };

document.addEventListener("mousedown", start);
document.addEventListener("mouseup", stop);
window.addEventListener("resize", resize);


function resize() {
  ctx.canvas.width = window.innerWidth - 545;
  ctx.canvas.height = window.innerHeight - 210;
}
function reposition(event) {
  coord.x = event.clientX - canvas.offsetLeft;
  coord.y = event.clientY - canvas.offsetTop;
}
function start(event) {
  document.addEventListener("mousemove", draw);
  reposition(event);
}
function stop() {
  document.removeEventListener("mousemove", draw);
}
function draw(event, color) {
ctx.beginPath();
  ctx.lineWidth = 5;
  ctx.lineCap = "round";
  if (color == null){
      color = "#000000";
  }
  ctx.strokeStyle = color;
  ctx.moveTo(coord.x, coord.y);
  reposition(event);
  ctx.lineTo(coord.x, coord.y);
  ctx.stroke();
}
 }, 2000);
