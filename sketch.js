
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;


var ground1;
var roof;
var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;
var bobdiameter;
var bob2diameter,bob3diameter;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	background(255);


	engine = Engine.create();
	world = engine.world;

bobdiameter = 40;


	ground1 = new Ground(200,670,1200,10);
	roof = new Ground(400,150,200,30);

	bob1 = new Bob(300,350,40);
    bob2 = new Bob(330,350,40);
	bob3 = new Bob(400,350,40);
	bob4 = new Bob(460,350,40);
     bob5 = new Bob(500,350,40);

   rope1 = new rope(bob1.body,roof.body,-bobdiameter*2,0);
     rope2 = new rope(bob2.body,roof.body,-bobdiameter*1,0);
   rope3 = new rope(bob3.body,roof.body,0,0);
   rope4 = new rope(bob4.body,roof.body,-bobdiameter*-1,0);
  rope5  = new rope(bob5.body,roof.body,-bobdiameter*-2,0);
	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	

	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	//World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  

  ground1.display();
  roof.display();
  

   bob1.show();
  bob2.show();
   bob3.show();
   bob4.show();
   bob5.show();

 rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();

  
  drawSprites();
 
}function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-85,y:85});
	//	Matter.Body.applyForce(bob5.body,bob5.body.position,{x:-145,y:105});
	}
	
}



