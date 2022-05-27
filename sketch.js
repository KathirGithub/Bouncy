var ball
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var radius = 40;
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
	engine = Engine.create();
	world = engine.world;

		var ball_options={
			isStatic:false,
			restitution:0.3,
			friction:0,
			density:1.2
		}

	

	//Create the Bodies Here.
	ball = Bodies.circle(200,100,radius,ball_options);
		World.add(world,ball);
	Engine.run(engine);
	ground =new Ground(width/2,650,width,20);
	leftSide=new Ground(1100,600,20,120)
	rightSide=new Ground(1350,600,20,120)
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  leftSide.display();
  rightSide.display();
ellipse(ball.position.x,ball.position.y,radius,radius)
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:350,y:-305})
	}
}

