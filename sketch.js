const Engine=Matter.Engine
const World=Matter.World 
const Bodies=Matter.Bodies 
var myEngine,myWorld 
var ground,ball


function setup() {
  createCanvas(800,400);
  myEngine=Engine.create()
  myWorld=myEngine.world
  ground=Bodies.rectangle(400,390,800,20,{isStatic:true})
  World.add(myWorld,ground)
  ball=Bodies.circle(100,100,20,{restitution:1})
  World.add(myWorld,ball)
}

function draw() {
  background(255,255,255); 
  Engine.update(myEngine)
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,800,20)
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20)
}