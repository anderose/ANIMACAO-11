var untwist = 4;
var t;

function setup() {
  createCanvas(500, 500);
  angleMode(DEGREES);
  rectMode(CENTER);
  noFill();
  t = 100;
}

function draw(){
  background(255);
  translate(250,250);
  
  var r = 255 * noise(t+10);
  var g = 255 * noise(t+15);
  var b = 255 * noise(t+20);
  
  var i = 30;
  
  while(i > 0){
    push();
    var sz = (frameCount + i*width/50) % width
    rotate (sz/(untwist));
    strokeWeight(sz/5);
    stroke(0,map(sz,0,width*1.2, 255, 0));
    rect(0,0,sz,sz);
    pop();
    i = i-1;
    t = t + 0.001;
    
    fill(r,g,b);
  }
}

