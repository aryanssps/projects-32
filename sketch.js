var snake;
var foodx, foody;
var score = 0;

function setup() {
  createCanvas(400,400);
  
  frameRate(3)
  foodLocation();
  snake = new Snake();
  
}

function draw() {
  background("lightblue");

  fill("Green");  
  textSize(20);
  text("Score: "+score,310,25);

  snake.display();
  snake.updatePosition();
  fill ("red");
  rect (foodx, foody, 10, 10); 

  if(snake.eat(foodx, foody)){
    foodLocation();
    score++
  }
  
}
function keyPressed(){
  if(keyCode === UP_ARROW){
    snake.xDirection = 0;
    snake.yDirection = -10;
  }
  if(keyCode === DOWN_ARROW){
    snake.xDirection = 0;
    snake.yDirection = 10;
  }
  if(keyCode === LEFT_ARROW){
    snake.xDirection = -10;
    snake.yDirection = 0;
  }
  if(keyCode === RIGHT_ARROW){
    snake.xDirection = 10;
    snake.yDirection = 0;
  }
}
function foodLocation(){
  foodx = floor(random(0,10))*10;
  foody = floor(random(0,10))*10;
}