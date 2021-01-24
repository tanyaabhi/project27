
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var option={
		isStatic:true
	}

	bBody=Bodies.rectangle(400,255,500,10,option);
	
	World.add(world,bBody);

	ground=Bodies,rectangle(400,255,500,10,Option);
	World.add(world,ground);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  rect(bBody.position.x,bBody.position.x,500,10);

  rect(ground.position.x,ground.position.y,800,10);
  
  drawSprites();
 
}



