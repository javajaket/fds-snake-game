import {ROWS, COLS} from './config';

function SnakeGameLogic() {
  
  this.joints = [
    {x: 2, y: 0}, 
    {x: 1, y: 0},
    {x: 0, y: 0},
  ];
    
  do{
    this.fruit = {x: Math.floor(Math.random() * COLS),
                  y: Math.floor(Math.random() * ROWS)};
  }while(false); // onSnake(this.fruit) 와 유사하게 선언시 작동 안 됨.. 

  this.dx = 1; this.dy = 0;
}

SnakeGameLogic.prototype.up = function() {
  this.dx = 0; this.dy = -1;
  console.log('up');
}

SnakeGameLogic.prototype.down = function() {
  this.dx = 0; this.dy = 1; 
  console.log('down');
}

SnakeGameLogic.prototype.left = function() {
  this.dx = -1; this.dy = 0;
  console.log('left');
}

SnakeGameLogic.prototype.right = function() {
  this.dx = 1; this.dy = 0;
  console.log('right');
}

SnakeGameLogic.prototype.nextState = function() {
  
  let sHead = this.joints[0];
  let snakeLength = this.joints.length;
  let snake = this.joints;
  
  let newPosition = {
    x: sHead.x + this.dx,
    y: sHead.y + this.dy
  };

  function onSnake(position) {
    for(let i=0; i<snakeLength; i++){
      if(position.x === snake[i].x && position.y === snake[i].y){
        return true;
      }        
    }return false;
  }
  
  if(onSnake(newPosition)){
    return false;
  }
    
  if(newPosition.x >= 0 && newPosition.y >= 0 && newPosition.x < COLS && newPosition.y < ROWS){
    this.joints.unshift(newPosition);

    if(newPosition.x === this.fruit.x && newPosition.y === this.fruit.y){
      this.fruit = {x: Math.floor(Math.random() * COLS),
                    y: Math.floor(Math.random() * ROWS)}   
    }else {
      this.joints.pop();
    }
    
    return true;
    } else return false;  
}

export default SnakeGameLogic;
