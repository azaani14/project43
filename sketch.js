var monkey,monkeyImage,jungle,jungleImage;
var banana,bananaImage,FoodGroup;
var stone,stoneImage,obstacleGroup;
var PLAY;
var END;
var gameState = PLAY



function preload(){
  monkeyImage =   loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  jungleImage = loadImage("jungle.jpg");
  
  bananaImage = loadImage("banana.png");
  
  stoneImage = loadImage("stone.png");
  
 
}



function setup() {
  createCanvas(600,600);
  
  jungle = createSprite(250,150,500,500);
  jungle.addImage("jImage",jungleImage);
  jungle.velocityX = -5; 
  jungle.scale = 1.5
  
  monkey = createSprite(80,390,20,20);
  monkey.addAnimation("mImage",monkeyImage);
  monkey.scale = 0.2;
  
  ground = createSprite(250,465,500,35);
  ground.visible = false;
  
  FoodGroup = new Group();
  obstacleGroup = new Group();
  SurvivalTime = 0;
}

function draw(){
  background("white")
  monkey.collide(ground)
  
  
    if(gameState === PLAY){

      if(jungle.x < 0){
        jungle.x = jungle.width/2
      }

    
   
    if(keyDown("space") && monkey.y >= 312.3){
      monkey.velocityY = -12;
    }
    
    monkey.velocityY = monkey.velocityY + 0.4;
    
    jungle.velocityX = -4 
    
    if(FoodGroup .isTouching(monkey)){
      
       var size = Math.round(random(10,40))
  switch(size){
    case 10: monkey.scale = 0.12;
      break;
    case 20: monkey.scale = 0.14;
      break;
    case 30: monkey.scale = 0.16;
      break;
    case 40: monkey.scale = 0.18;
      break;
  }
    }    
    if (obstacleGroup.isTouching(monkey)){
      monkey.scale = 0.1;
    }    
  SurvivalTime = SurvivalTime +  Math.round(getFrameRate()/60 );
    
  Obstacle();
  bananaGroup();
  
    
  drawSprites();
  
  stroke("white");
  textSize(20);
  fill("white");
  text("SurvivalTime " + SurvivalTime ,300,45);
  
  }
}

function  Obstacle(){
  if(frameCount%60 === 0){
    stone = createSprite(700,420,10,10);
    stone.velocityX = -7 
    stone.addImage(stoneImage);
    stone.scale = 0.25;
    obstacleGroup.add(stone);

  }
}

function bananaGroup(){
  if(frameCount%80 === 0){
    banana = createSprite(650,150,40,10);
    banana.velocityX = -6;
    banana.y = random(100,150);
    banana.addImage(bananaImage);
    banana.scale = 0.06;
    banana.debug = 
    
    FoodGroup.add(banana);
  }
}
