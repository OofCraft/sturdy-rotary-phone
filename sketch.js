const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var ground,divison1
var particles = [];
var plinkos = [];
var divison = [];
var divisonHeight = 300;

function setup(){
    createCanvas(480,800);
    engine = Engine.create();
    world = engine.world;
    for (var k = 0; k<=width; k = k+80){
        divison.push(new Divison(k, height-divisonHeight/2, 10, divisonHeight))
    }

    for (var j=40; j<=width; j=j+50){
        plinkos.push(new Plinko(j,75,))
    }

    for (var j=15; j<=width; j=j+50){
        plinkos.push(new Plinko(j,175))
    }

    for (var j=40; j<=width; j=j+50){
        plinkos.push(new Plinko(j,275))
    }

    for (var j=15; j<=width; j=j+50){
        plinkos.push(new Plinko(j,375))
    }
    
    ground = new Ground(240,780,480,20);
    //divison1 = new Divison(30,40,30,40);

}


function draw() {
    background(0);
    Engine.update(engine);

    ground.display();
}