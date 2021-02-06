var hr,hrAngle
var mn,mnAngle;
var sc,scAngle;
function setup() {
  createCanvas(800,400);
  angleMode(DEGREES);
  
}

function draw() {
  background(255,255,255)
  translate (200,200);
  rotate(90,90);
  mn=minute() 
  mnAngle=map(mn,0,60,0,360);
  push();
  rotate(mnAngle);
  line(0,0,75,0);
  pop();
  arc (0,0,280,280,0,0,mnAngle);
  sc=second()
scAngle=map(sc,0,60,0,360);
  push();
  rotate(scAngle);
  line(0,0,85,0);
  pop();
  arc (0,0,280,280,0,0,scAngle);
hr=hour()
hrAngle=map(hr,0,12,0,60);
  push();
  rotate(hrAngle);
  line(0,0,60,0);
  pop();
  arc (0,0,280,280,0,0,hrAngle);
  drawSprites();
}