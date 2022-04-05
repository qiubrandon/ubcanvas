//const { Socket } = require("engine.io");
function word(){
  let wordlist = "plate trash paper plane loops brick water jeans strip fires roman grape vault amber nanny scalp drift piles scalp final trace quite quiet dense cocky based baggy click feint these puffy diver slept speed fetus pound gland globe teach"
  wordlist = wordlist.split(" ");
  let randomNum = Math.floor(Math.random() * wordlist.length);
  let word = wordlist[randomNum];
  return word;
}

window.addEventListener("load", () => {
  
  const randomize = document.getElementById("randomizeBtn");
  
  const wordDisplay = document.getElementById("word");
  
  const red = document.getElementById("red")
  const blue = document.getElementById("blue")
  const black = document.getElementById("black")
  red.addEventListener("click", ()=>{
    document.getElementById("colour").innerHTML = "red"
    
  })
  blue.addEventListener("click", ()=>{
    document.getElementById("colour").innerHTML = "blue"
    
  })
  black.addEventListener("click", ()=>{
    document.getElementById("colour").innerHTML = "black"
    
  })




  const canvas = document.getElementById("myCanvas");
  const ctx = canvas.getContext("2d");
  let coord = { x: 0, y: 0 };
  resize()
  document.addEventListener("mousedown", start);
  document.addEventListener("mouseup", stop);
  window.addEventListener("resize", resize);
  randomize.addEventListener("click", rando);
  
  rando()

  function resize(){
    ctx.canvas.width = window.innerWidth * .5;
    ctx.canvas.height = window.innerHeight * .7;
  }
  
  function reposition(event) {
    coord.x = (event.clientX - canvas.offsetLeft) - 16;
    coord.y = (event.clientY - canvas.offsetTop) + 20;
    const data = {x: coord.x, y: coord.y}
    
  }
  

  function start(event) {
    document.addEventListener("mousemove", draw);
    reposition(event);
  
  }
  function stop() {
    document.removeEventListener("mousemove", draw);
  }
  
  function draw(event) {
 
  ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.lineCap = "round";
    ctx.strokeStyle = document.getElementById("colour").innerHTML;
    ctx.moveTo(coord.x, coord.y);
    reposition(event);
    ctx.lineTo(coord.x, coord.y);
    ctx.stroke();
  }
  function rando(){
    wordDisplay.innerHTML = "Try drawing this: " + word();
  }
  
})