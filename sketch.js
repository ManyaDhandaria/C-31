const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var particles = [];
var plinkos = [];
var divisions =[];
var particle;

var divisionHeight=300;
var score =0;
var count = 0;
var gameState ="start";

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }
    for (var j = 75; j <=width; j=j+50) {
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) {
        plinkos.push(new Plinko(j,175));
    }

    for (var j = 75; j <=width; j=j+50) {
        plinkos.push(new Plinko(j,275));
    }

    for (var j = 50; j <=width-10; j=j+50) {
        plinkos.push(new Plinko(j,375));
    }
    Engine.run(engine);
}
 
function draw() {
  rectMode(CENTER);
  background(0);
 
  
 
  
 for( var n=0;n<divisions.length;n++){
   divisions[n].display();
 }

 if(frameCount%60==0){
   particles.push(new Particle(random(width/2-30,width/2+30),10,10));
 }

  for (var i = 0; i < plinkos.length; i++) {
     plinkos[i].display();  
  }
 
   for (var k = 0; k < particles.length; k++) 
   {
     particles[k].display();
   }
 

   ground.display();
}
