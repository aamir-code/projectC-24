
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var dustbinPart1;
var dustbinPart2;
var dustbinPart3;
var ball;
var ground;


function setup() {
	createCanvas(800,700);
	
	engine = Engine.create();
	world = engine.world;

	
    ground = new Ground(width/2,660,950,25);
	dustbinPart1 = new Dustbin(610,640,150,20);
	dustbinPart2 = new Dustbin(685,580,20,100);
	dustbinPart3 = new Dustbin(535,580,20,100);
    ball = new crumpledPaper(100,600,10);
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

  background(0);
  Engine.update(engine);

  ground.display();
  dustbinPart1.display();
  dustbinPart2.display();
  dustbinPart3.display();
  ball.display();
  
  
  
  drawSprites();
 
}
function keyPressed() {
	if(keyCode === UP_ARROW) {
	Matter.Body.applyForce(ball.body,ball.body.position,{x:15,y:-15})	

	}
}



