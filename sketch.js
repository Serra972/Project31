var snake,scl = 20;

function setup() {
  createCanvas(500,500);
  snake = new Snake();
  frameRate(5);
  pickLocation();
}


function pickLocation(){
  var col = floor(width/scl);
  var row = floor(height/scl);
  food = createVector(floor(random(col)),floor(random(row)));
  food.mult(scl); 
}

function draw() {
  background("yellow"); 
  snake.crash();
  snake.update();
  snake.display();

  if (snake.eat(food)){
    pickLocation();
  }
  
  fill("red");
  rect(food.x,food.y,scl,scl)
}

function keyPressed(){
  if (keyCode === UP_ARROW){
    snake.direction(0,-1);
  };

  if (keyCode === DOWN_ARROW){
    snake.direction(0,1);
  };

  if (keyCode === LEFT_ARROW){
    snake.direction(-1,0);
  };

  if (keyCode === RIGHT_ARROW){
    snake.direction(1,0);
  };

}

