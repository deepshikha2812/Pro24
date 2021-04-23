
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);

    

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,670,1200,20);
	
 	paper = new Paper(200,550,40);

	bottom = createSprite(1000, 650, 200, 20);
	bottom.shapeColor = "lightblue";

	side1 = createSprite(900, 610, 20, 100);
	side1.shapeColor = "lightblue";

	side2 = createSprite(1100, 610, 20, 100);
	side2.shapeColor = "lightblue";

    Engine.run(engine);


	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  
  ground.display();
 paper.display();
  
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
	}
}



