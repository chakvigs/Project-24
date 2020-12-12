
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	dustBin = new dustbin(600, 630);
	Paper = new paper(100, 670, 10);
	Ground = new Ground(width/2, 670, width, 20);

	render = Render.create({
		element : document.Body, 
		engine : Engine,
		options : {
			width = 600,
			height = 700,
			wireFrames : false
		}
	});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  dustBin.display();
  Paper.display();
  Ground.display()

  if (keyCode === "UP_ARROW") {
	  Matter.Body.applyForce(Paper.body, Paper.body.position, {
		  x : 85,
		  y : 85
	  });
  }
  
  drawSprites();
 
}


