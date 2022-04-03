setTimeout(() => { 
  let canvas = document.getElementById("myCanvas")
  console.log(canvas)

  let ctx = canvas.getContext("2d");

  let coord = { x: 0, y: 0 };

  document.addEventListener("mousedown", start);
  document.addEventListener("mouseup", stop);
  window.addEventListener("resize", resize);

  resize()

  function resize() {
    ctx.canvas.width = window.innerWidth * .5;
    ctx.canvas.height = window.innerHeight * .7;
  }
  function reposition(event) {
    coord.x = (event.clientX - canvas.offsetLeft) - 16;
    coord.y = (event.clientY - canvas.offsetTop) + 20;
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
    ctx.strokeStyle = "#000000";
    ctx.moveTo(coord.x, coord.y);
    reposition(event);
    ctx.lineTo(coord.x, coord.y);
    ctx.stroke();
  }
}, 100);
