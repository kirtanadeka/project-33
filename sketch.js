const Engine = Matter.Engine,
World = Matter.World,
Body = Matter.Bodies,
Events = Matter.Events;

var particles = [];
var plinkos = [];
var divisions = [];
var score = 0;
var divisionHeight = 300;
var particle;

function setup() {
  createCanvas(800,800);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2,height,width,20);

  for(var k = 0; k<=width; k = k+80){
     divisions.push(new Divisions(k,height-divisionHeight/2,8,divisionHeight));
  }
  for(var j = 75; j<=width; j = j+50){
   plinkos.push(new Plinkos(j,75))
  }
  for(var j = 50; j<=width-10; j = j+50){
    plinkos.push(new Plinkos(j,175))
  }
  for(var j = 75; j<=width; j = j+50){
    plinkos.push(new Plinkos(j,275))
  }
  for(var j = 50; j<=width-10; j = j+50){
    plinkos.push(new Plinkos(j,375))
  }
 
}

function draw() {
  background(0);  

text("Score"+score,20,30);

Engine.update(engine);

ground.display();
for(var l = 0; l<plinkos.length;l = l+1){
plinkos[l].display();
}
for(var m = 0; m<particles.length; m = m+1){
  particles[m].display();
}
for(var n = 0; n<divisions.length; n = n+1){
 divisions[n].display();
}

if(frameCount%60 === 0){
  particles.push(new Particle,(random(width/2-30,width/2+30),10,10))
  score = score+1;
}
  drawSprites();
}

function mousePressed(){
if(gameState!=="end"){
  count++;
  particle = new Particle(mouseX, 10, 10, 10);
}
}

