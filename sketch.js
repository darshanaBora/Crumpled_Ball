
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,ground, side1,side2,side3; 
function preload(){
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

  ball = new Paper(200,250);
  ground = new Ground(600,300,1200,20);

  side1 = new Dustbin(1000,280,200,20);
  side2 = new Dustbin(890,220,20,100);
  side3 = new Dustbin(1110,220,20,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
   
  ball.display();
  ground.display();
  side1.display();
  side2.display();
  side3.display();

  drawSprites();
 
}

function keyPressed() {
  if(keyCode === UP_ARROW) {
    Matter.Body.applyForce(ball.body,ball.body.position,{x:80,y:-80});
  }
}

