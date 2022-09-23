var garden,rabbit;
var gardenImg,rabbitImg;
var orange,orangeImg,red,redImg
var apple,appleImg

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
 orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png"); 
}

function setup(){
  
  createCanvas(400,400);
  
// mover o fundo
garden=createSprite(200,200);
garden.addImage(gardenImg);

//criar sprite do coelho
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);


  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x=mouseX
  things();

  drawSprites();
  
}

function things(){
if (frameCount % 60 === 0){
  var thing=createSprite(200,-20,30,30);
  thing.x = Math.round(random(50,350));
  thing.velocityY = 5;

var num = Math.round(random(1,3))
switch(num){
  case 1: thing.addImage(orangeImg);
         break;
  case 2: thing.addImage(redImg);
         break;
  case 3: thing.addImage(appleImg);
         break;
  default:break;
}
thing.scale=0.08;
thing.lifetime=100;
}
}