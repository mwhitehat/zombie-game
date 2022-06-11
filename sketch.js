var bg,bgImg;
var player, shooterImg, shooter_shooting;
var zombie, zombieImg;

var heart1, heart2, heart3;
var heart1Img, heart2Img, heart3Img;




function preload(){
  
  heart1Img = loadImage("heart_1.png")
  heart2Img = loadImage("heart_2.png")
  heart3Img = loadImage("heart_3.png")

  shooterImg = loadImage("shooter_2.png")
  shooter_shooting = loadImage("shooter_3.png")

  zombieImg = loadImage("zombie.png")

  bgImg = loadImage("bg.jpeg")
  ebImg = loadImage("game-over.png")

  lose = loadSound("lose.mp3")
  winning = loadSound("win.mp3")
  explosionSound = loadSound("explosion.mp3")

}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

 

}

function draw() {
  background(0); 



  drawSprites();

}
















