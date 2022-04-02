<<<<<<< HEAD

=======
>>>>>>> 280db0e6bea3dc2c8a71fb4eeee9df94324ad43a

setTimeout(() => { let canvas = document.getElementById("myCanvas");
console.log(canvas)
const redButton = document.getElementById("red");


let ctx = canvas.getContext("2d");

let coord = { x: 0, y: 0 };

document.addEventListener("mousedown", start);
document.addEventListener("mouseup", stop);
window.addEventListener("resize", resize);

function colorPicker(col){
    if (col == "red"){
        return "#FF0000"
    }
    else if (col == "blue"){
        return "#0000FF"
    }
    else if (col == "green"){
        return "#008000"
    }
    else if (col == "black"){
        return "#000000"
    }
    else{
        return
    }
}

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
    redButton.addEventListener("click", () =>{
        color = "#FF0000"
});
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

<<<<<<< HEAD
// =======
// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
// app.get('/hi', (req, res) => {
//     res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })
// >>>>>>> 9b02b8b5b56da5774d4ce5114299594a6cadd2d9
=======
>>>>>>> 280db0e6bea3dc2c8a71fb4eeee9df94324ad43a
