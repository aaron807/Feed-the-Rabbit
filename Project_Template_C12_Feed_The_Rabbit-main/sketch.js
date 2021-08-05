var garden,rabbit;
var gardenImg,rabbitImg;
var apple
var leaf
var selectSprites

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png")
  leafImg = loadImage("redImage.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  selectSprites = Math.round(random(1,2 ));

  rabbit.x=mouseX

  edges= createEdgeSprites();
  rabbit.collide(edges);
  
  //createApples()
  //createLeaf()
  if (frameCount % 80 == 0) {
    if (selectSprites == 1){
      createApples()
    }
    else{
      createLeaf()
    }
  }

  drawSprites();
}

function createApples() {
apple = createSprite(random(50,350),40,10,10);
apple.addImage(appleImg);
apple.scale=0.08
apple.velocityY=7
apple.lifetime=200
}

function createLeaf() {
  leaf = createSprite(random(50,350),40,10,10);
  leaf.addImage(leafImg);
  leaf.scale=0.08
  leaf.velocityY=7
  leaf.lifetime=200
  }