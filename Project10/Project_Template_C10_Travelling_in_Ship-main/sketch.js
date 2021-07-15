var ship, ship_floating;
var sea, seaImage;

function preload(){
seaImg = loadImage("sea.png");
shipImg1 = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(400,400);
  
  sea = createSprite(200,200,10,10);
  sea.addImage(seaImg);
  sea.x = sea.width/2;
}

function draw() {
  background("blue");
  sea.velocityX = -1

  if(sea.x < 0){
    sea.x = sea.width/2;
  }
 
  drawSprites();
}