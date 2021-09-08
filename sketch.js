var bullet1,bullet2,bullet3,bullet4,bullet5;
var wall1,wall2,wall3,wall4,wall5;
var Boundary1, Boundary2,Boundary3,Boundary4;
var outerline1,outerline2;
var speed , weight;
var thickness;

function setup() {
  createCanvas(1600,600);
  
speed = random(223,321);
weight = random(30,52);
thickness = random(22,83);

  //MAKE CARS HERE
   bullet1 = createSprite(30,100,46,30);
   bullet1.shapeColor = ("pink");
   bullet1.velocityX = speed;

  bullet2 = createSprite(30,195,46,30);
  bullet2.shapeColor = ("pink");
 bullet2.velocityX = speed;

 bullet3  = createSprite(30,300,46,30);
 bullet3.shapeColor = ("pink");
 bullet3.velocityX = speed;

 bullet4 = createSprite(30,410,46,30);
 bullet4.shapeColor = ("pink");
  bullet4.velocityX = speed;

   bullet5 = createSprite(30,520,46,30);
 bullet5.shapeColor = ("pink");
 bullet5.velocityX = speed;

  //MAKE OUTER LINE HERE
   outerline1 = createSprite(20,20,2696,45);
  outerline1.shapeColor = ("orange");

   outerline2 = createSprite(20,600,2696,45);
  outerline2.shapeColor = ("orange");

  //MAKE BOUNDARIES HERE
   Boundary1 = createSprite(20,140,2696,05);
  Boundary1.shapeColor = ("white");

   Boundary2 = createSprite(20,245,2696,05);
  Boundary2.shapeColor = ("white");

   Boundary3 = createSprite(20,350,2696,05);
  Boundary3.shapeColor = ("white");

   Boundary4 = createSprite(20,460,2696,05);
  Boundary4.shapeColor = ("white");

  //MAKE SERVICE CENTRE HERE
 wall1 = createSprite(1300,100,thickness,70);
  wall1.shapeColor = (80,80,80);

  wall2 = createSprite(1300,195,thickness,70);
  wall2.shapeColor = (80,80,80);

   wall3 = createSprite(1300,300,thickness,70);
  wall3.shapeColor = (80,80,80);

  wall4 = createSprite(1300,410,thickness,70);
  wall4.shapeColor = (80,80,80);

  wall5 = createSprite(1300,520,thickness,70);
  wall5.shapeColor = (80,80,80);
  
  

}

function draw() {
  background(0); 
  
if (hasCollided(bullet1,wall1)){
  var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
  if(damage<10){
    wall1.shapeColor = color(255,0,0)
  }
  if(damage>10){
    wall1.shapeColor = color (0,255,0)
  }
}

if (hasCollided(bullet2,wall2)){
  var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
  if(damage<10){
    wall2.shapeColor = color(255,0,0)
  }
  if(damage>10){
    wall2.shapeColor = color (0,255,0)
  }
}

if (hasCollided(bullet3,wall3)){
  var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
  if(damage<10){
    wall3.shapeColor = color(255,0,0)
  }
  if(damage>10){
    wall3.shapeColor = color (0,255,0)
  }
}

if (hasCollided(bullet4,wall4)){
  var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
  if(damage<10){
    wall4.shapeColor = color(255,0,0)
  }
  if(damage>10){
    wall4.shapeColor = color (0,255,0)
  }
}

if (hasCollided(bullet5,wall5)){
  var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
  if(damage<10){
    wall5.shapeColor = color(255,0,0)
  }
  if(damage>10){
    wall5.shapeColor = color (0,255,0)
  }
}


  drawSprites();
}

function hasCollided(lbullet,lwall){
  bulletRightEdge = lbullet.x+lbullet.width;
  wallLeftEdge = lwall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true
  }
  return false
}
