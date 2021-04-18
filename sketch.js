
var fixedRect, movingRect;
var gameObject1, gameObject2;

function setup() {
  createCanvas(1200,800);
 
 
  movingRect = createSprite(800, 400,80,30);
  movingRect.shapeColor = "green";

  fixedRect = createSprite(100, 100, 50, 50);
  fixedRect.shapeColor = "green";
  
  gameObject1 =createSprite(700,400,80,30);
  gameObject1.shapeColor="red";

  gameObject2 =createSprite(600,400,80,30);
  gameObject2.shapeColor="red";

  gameObject1.velocityX=1
  gameObject2.velocityX=-1
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,fixedRect)){
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "blue";
  }
  
  else {
    movingRect.shapeColor = "green";
  
    fixedRect.shapeColor = "green"
  }
if(bounceOff(gameObject1,gameObject2)
 ){
  
}



  drawSprites();
}


