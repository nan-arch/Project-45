var leftArrow,leftArrowImg;
var rightArrow,rightArrowImg;
var ball,ballImg;
var shooter,shooterImg;
var restart,restartImg;

function preload(){
 leftArrowImg = loadImage("assets/left_arrow.png");
 rightArrowImg = loadImage("assets/right_arrow.png");
 ballImg = loadImage("assets/ball.png");
 shooterImg = loadImage("assets/shooter.png");
 restartImg = loadImage("asseys/restart.png");
 
}

function setup(){
createCanvas(800, 700);
 
 leftArrow = createSprite(200,200,50,50);
 leftArrow.addImage(leftArrowImg);
 leftArrow.scale = 0.1;

 rightArrow = createSprite(200,200,50,50);
 rightArrow.addImage(rightArrowImg);
 rightArrow.scale = 0.1;

 ball = createSprite(300,400,20,20);
 ball.addImage(ballImg);
 ball.scale = 0.1;

 shooter = createSprite(100,100,20,20);
 shooter.addImage(shooterImg);
 shooter.scale = 0.2;

}


function draw() {
  background(0);
  
  drawSprites();
 
}



