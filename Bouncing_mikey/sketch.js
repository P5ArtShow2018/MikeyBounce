var x = 25
var speed = 5
var y = 25
function setup() {
  createCanvas(500,500)
}

function draw() {
  background(0,255,255)
  fill(254,56,60)
  ellipse(x,250,50,50)
  
  if (x < 25){
    speed = 5
  }
  
  if (x > 475){
    speed = -5
  }
  x = x + speed
  
  
  ellipse(250,y,50,50)
  
  if (y < 25){
    speed = 5
  }
  
  if (y > 475){
   speed = -5 
  }
  y = y + speed
  
  ellipse(x,y,50,50)
  
  
}