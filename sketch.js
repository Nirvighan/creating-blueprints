//name space for engine world and bodies
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

//create all the variables
var engine, world;
var box1;
var box2;
var ground;


function setup()
{


    //create the canvas
    var canvas = createCanvas(400,400);

    //creating our own engine
    engine = Engine.create();

    // reating the world
    world = engine.world;

        //create the boxes and ground
    box1 = new Box(200,300,50,50);
    box2 = new Box(240,100,50,100);
    ground = new Ground(200,390,400,25);
    
}

function draw()
{

    //clear the background
    background(0);

    //update the engine
    Engine.update(engine);

    //display all the objects
    box1.display();
    box2.display();
    ground.display();
   
}